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
            const result = await getClientUseCase.execute(documentNumber, documentType);
            setClient(result);
        } catch (err) {
            setError("Client not found or error fetching data.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleExport = async () => {
        if (!client) return;
        try {
            const blob = await exportClientUseCase.execute(searchParams.documentNumber, searchParams.documentType);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `client_${searchParams.documentNumber}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            alert("Failed to export client data.");
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
            alert("Failed to download fidelity report.");
        }
    };

    return (
        <div className="client-page">
            <header className="page-header">
                <h1>Client Consultation Portal</h1>
            </header>

            <main className="page-content">
                <div className="actions-bar">
                    <ClientSearch onSearch={handleSearch} loading={loading} documentTypes={documentTypes} />
                    <FidelityReportButton onDownload={handleFidelityReport} />
                </div>

                {error && <div className="error-message">{error}</div>}

                {client && (
                    <div className="results-section">
                        <div className="client-header-actions">
                            <ClientInfo client={client} />
                            <ExportClientButton onExport={handleExport} disabled={loading} />
                        </div>
                        <PurchasesTable purchases={client.compras} />
                    </div>
                )}
            </main>
        </div>
    );
};

export default ClientPage;
