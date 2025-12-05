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

// Dependency Injection (Manual for now)
const clientRepository = new ClientRepositoryImpl();
const getClientUseCase = new GetClientUseCase(clientRepository);
const exportClientUseCase = new ExportClientUseCase(clientRepository);
const getFidelityReportUseCase = new GetFidelityReportUseCase(clientRepository);

const ClientPage = () => {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (documentNumber) => {
        setLoading(true);
        setError(null);
        setClient(null);
        try {
            const result = await getClientUseCase.execute(documentNumber);
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
            const blob = await exportClientUseCase.execute(client.numeroDocumento);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `client_${client.numeroDocumento}.csv`;
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
                    <ClientSearch onSearch={handleSearch} loading={loading} />
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
