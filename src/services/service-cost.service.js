import serviceCostRepository from '../repositories/service-cost.repository.js';

class ServiceCostService {
  async findAll() {
    return await serviceCostRepository.findAll();
  }

  async create(data, id, transaction) {
    return await serviceCostRepository.create(data, id, transaction);
  }

  async update(data, id, transaction) {
    return await serviceCostRepository.update(data, id, transaction);
  }
}

export default new ServiceCostService();
