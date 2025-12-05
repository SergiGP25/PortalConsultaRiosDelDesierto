/**
 * Abstract class representing the Client Repository interface.
 */
export class ClientRepository {
    /**
     * Retrieves a client by their document number.
     * @param {string} documentNumber
     * @returns {Promise<import("../models/Client").Client>}
     */
    async getClient(documentNumber) {
        throw new Error("Method 'getClient' must be implemented.");
    }

    /**
     * Exports client data to CSV.
     * @param {string} documentNumber
     * @returns {Promise<Blob>}
     */
    async exportClient(documentNumber) {
        throw new Error("Method 'exportClient' must be implemented.");
    }

    /**
     * Retrieves the fidelity report as Excel.
     * @returns {Promise<Blob>}
     */
    async getFidelityReport() {
        throw new Error("Method 'getFidelityReport' must be implemented.");
    }
}
