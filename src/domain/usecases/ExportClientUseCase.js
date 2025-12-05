/**
 * Use case for exporting client data.
 */
export class ExportClientUseCase {
    /**
     * @param {import("../repositories/ClientRepository").ClientRepository} clientRepository
     */
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }

    /**
     * Execute the use case.
     * @param {string} documentNumber
     * @returns {Promise<Blob>}
     */
    async execute(documentNumber) {
        return await this.clientRepository.exportClient(documentNumber);
    }
}
