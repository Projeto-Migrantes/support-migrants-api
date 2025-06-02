import targetPopulationRepository from '../repositories/target-population.repository.js';

class TargetPopulationService {
  async findAll() {
    return await targetPopulationRepository.findAll();
  }
}

export default new TargetPopulationService();
