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
     * @param {number} documentType
     * @param {string} documentNumber
     * @returns {Promise<import("../models/Client").Client>}
     */
    async execute(documentType, documentNumber) {
        return await this.clientRepository.getClient(documentType, documentNumber);
    }
}
