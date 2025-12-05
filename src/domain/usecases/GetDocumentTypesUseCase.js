/**
 * Use case for retrieving available document types.
 */
export class GetDocumentTypesUseCase {
    /**
     * @param {import("../repositories/ClientRepository").ClientRepository} clientRepository
     */
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }

    /**
     * Execute the use case.
     * @returns {Promise<Array<import("../models/TipoDocumentoDto").TipoDocumentoDto>>}
     */
    async execute() {
        return await this.clientRepository.getDocumentTypes();
    }
}
