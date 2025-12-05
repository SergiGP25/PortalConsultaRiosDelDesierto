/**
 * Abstract class representing the Client Repository interface.
 */
export class ClientRepository {
    /**
     * Retrieves a client by their document number and type.
     * @param {string} documentNumber
     * @param {number} documentType
     * @returns {Promise<import("../models/Client").Client>}
     */
    async getClient(documentNumber, documentType) {
        throw new Error("Method 'getClient' must be implemented.");
    }

    /**
     * Exports client data to CSV.
     * @param {string} documentNumber
     * @param {number} documentType
     * @returns {Promise<Blob>}
     */
    async exportClient(documentNumber, documentType) {
        throw new Error("Method 'exportClient' must be implemented.");
    }

    /**
     * Retrieves the fidelity report as Excel.
     * @returns {Promise<Blob>}
     */
    async getFidelityReport() {
        throw new Error("Method 'getFidelityReport' must be implemented.");
    }

    /**
     * Retrieves the list of available document types.
     * @returns {Promise<Array<import("../models/TipoDocumentoDto").TipoDocumentoDto>>}
     */
    async getDocumentTypes() {
        throw new Error("Method 'getDocumentTypes' must be implemented.");
    }
}
