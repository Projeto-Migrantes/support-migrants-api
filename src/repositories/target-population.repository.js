import TargetPopulation from '../models/TargetPopulation.js';

class TargetPopulationRepository {
  async findAll() {
    return await TargetPopulation.findAll();
  }

  async create(data, id, transaction) {
    return await TargetPopulation.create(
      {
        ...data,
        institution_id: id,
      },
      { transaction },
    );
  }
}

export default new TargetPopulationRepository();
