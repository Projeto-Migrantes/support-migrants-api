import ServiceCost from '../models/ServiceCost.js';

class ServiceCostRepository {
  async findAll() {
    return await ServiceCost.findAll();
  }

  async create(data, id, transaction) {
    return await ServiceCost.create(
      {
        ...data,
        institution_id: id,
      },
      {
        transaction,
      },
    );
  }

  async update(data, id, transaction) {
    return await ServiceCost.update(data, {
      where: { institution_id: id },
      transaction,
    });
  }
}

export default new ServiceCostRepository();
