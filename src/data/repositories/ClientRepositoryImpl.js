import { ClientRepository } from '../../domain/repositories/ClientRepository';
import { Client } from '../../domain/models/Client';
import apiClient from '../sources/api/ApiClient';

export class ClientRepositoryImpl extends ClientRepository {
    async getClient(documentNumber) {
        try {
            const response = await apiClient.get(`/api/Clientes/${documentNumber}`);
            return new Client(response.data);
        } catch (error) {
            console.error("Error fetching client:", error);
            throw error;
        }
    }

    async exportClient(documentNumber) {
        try {
            const response = await apiClient.get(`/api/Clientes/export/${documentNumber}`, {
                params: { formato: 'csv' },
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
}
