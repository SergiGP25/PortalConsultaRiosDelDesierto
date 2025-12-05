/**
 * Use case for retrieving client information.
 */
export class GetClientUseCase {
    /**
     * @param {import("../repositories/ClientRepository").ClientRepository} clientRepository
     */
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }

    /**
     * Execute the use case.
     * @param {string} documentNumber
     * @param {number} documentType
     * @returns {Promise<import("../models/Client").Client>}
     */
    async execute(documentNumber, documentType) {
        return await this.clientRepository.getClient(documentNumber, documentType);
    }
}
