/**
 * Use case for retrieving the fidelity report.
 */
export class GetFidelityReportUseCase {
    /**
     * @param {import("../repositories/ClientRepository").ClientRepository} clientRepository
     */
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }

    /**
     * Execute the use case.
     * @returns {Promise<Blob>}
     */
    async execute() {
        return await this.clientRepository.getFidelityReport();
    }
}
