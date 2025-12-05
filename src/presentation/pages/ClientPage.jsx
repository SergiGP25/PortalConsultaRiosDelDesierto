import React, { useState } from 'react';
import ClientSearch from '../components/ClientSearch';
import ClientInfo from '../components/ClientInfo';
import PurchasesTable from '../components/PurchasesTable';
import ExportClientButton from '../components/ExportClientButton';
import FidelityReportButton from '../components/FidelityReportButton';
import { ClientRepositoryImpl } from '../../data/repositories/ClientRepositoryImpl';
import { GetClientUseCase } from '../../domain/usecases/GetClientUseCase';
import { ExportClientUseCase } from '../../domain/usecases/ExportClientUseCase';
import { GetFidelityReportUseCase } from '../../domain/usecases/GetFidelityReportUseCase';
import { GetDocumentTypesUseCase } from '../../domain/usecases/GetDocumentTypesUseCase';

// Dependency Injection (Manual for now)
const clientRepository = new ClientRepositoryImpl();
const getClientUseCase = new GetClientUseCase(clientRepository);
const exportClientUseCase = new ExportClientUseCase(clientRepository);
const getFidelityReportUseCase = new GetFidelityReportUseCase(clientRepository);
const getDocumentTypesUseCase = new GetDocumentTypesUseCase(clientRepository);

const ClientPage = () => {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [documentTypes, setDocumentTypes] = useState([]);
    const [searchParams, setSearchParams] = useState({ documentNumber: '', documentType: '' });

    React.useEffect(() => {
        const fetchDocumentTypes = async () => {
            try {
                const types = await getDocumentTypesUseCase.execute();
                setDocumentTypes(types);
            } catch (err) {
                console.error("Error fetching document types:", err);
            }
        };
        fetchDocumentTypes();
    }, []);

    const handleSearch = async (documentNumber, documentType) => {
        setLoading(true);
        setError(null);
        setClient(null);
        setSearchParams({ documentNumber, documentType });
        try {
            const result = await getClientUseCase.execute(documentType, documentNumber);
            setClient(result);
        } catch (err) {
            setError("Cliente no encontrado");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleExport = async () => {
        if (!client) return;
        try {
            const blob = await exportClientUseCase.execute(searchParams.documentType, searchParams.documentNumber);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `client_${searchParams.documentNumber}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            alert("Error al exportar datos del cliente.");
        }
    };

    const handleFidelityReport = async () => {
        try {
            const blob = await getFidelityReportUseCase.execute();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'fidelity_report.xlsx';
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            alert("Error al descargar el reporte de fidelización.");
        }
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-2">
                        Portal de Consulta de Clientes
                    </h1>
                    <p className="text-gray-600 text-lg">Buscar y gestionar información de clientes</p>
                </header>

                <main>
                    <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                        <ClientSearch onSearch={handleSearch} loading={loading} documentTypes={documentTypes} />
                        <FidelityReportButton onDownload={handleFidelityReport} />
                    </div>

                    {error && (
                        <div className="bg-red-50 border-2 border-red-300 text-red-700 px-6 py-4 rounded-xl mb-8 text-center font-medium shadow-sm">
                            {error}
                        </div>
                    )}

                    {client && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="flex flex-col gap-4">
                                <ClientInfo client={client} />
                                <ExportClientButton onExport={handleExport} disabled={loading} />
                            </div>
                            <PurchasesTable purchases={client.compras} />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ClientPage;
