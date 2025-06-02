import targetPopulationRepository from '../repositories/target-population.repository.js';

class TargetPopulationService {
  async findAll() {
    return await targetPopulationRepository.findAll();
  }

  async create(data, id, transaction) {
    return await targetPopulationRepository.create(data, id, transaction);
  }
}

export default new TargetPopulationService();
