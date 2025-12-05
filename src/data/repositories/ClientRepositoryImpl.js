import { ClientRepository } from '../../domain/repositories/ClientRepository';
import { Client } from '../../domain/models/Client';
import apiClient from '../sources/api/ApiClient';

export class ClientRepositoryImpl extends ClientRepository {
    async getClient(documentNumber, documentType) {
        try {
            const response = await apiClient.get(`/api/Clientes/${documentNumber}`, {
                params: { tipoDocumento: documentType }
            });
            return new Client(response.data);
        } catch (error) {
            console.error("Error fetching client:", error);
            throw error;
        }
    }

    async exportClient(documentNumber, documentType) {
        try {
            const response = await apiClient.get(`/api/Clientes/Reporte/${documentNumber}`, {
                params: {
                    tipoDocumento: documentType,
                    formato: 'csv'
                },
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            console.error("Error exporting client:", error);
            throw error;
        }
    }

    async getFidelityReport() {
        try {
            const response = await apiClient.get('/api/Clientes/reporte-fidelizacion', {
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching fidelity report:", error);
            throw error;
        }
    }

    async getDocumentTypes() {
        try {
            const response = await apiClient.get('/api/Clientes/Documentos');
            return response.data;
        } catch (error) {
            console.error("Error fetching document types:", error);
            throw error;
        }
    }
}
