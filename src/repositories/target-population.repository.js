import TargetPopulation from '../models/TargetPopulation.js';

class TargetPopulationRepository {
  async findAll() {
    return await TargetPopulation.findAll();
  }
}

export default new TargetPopulationRepository();
