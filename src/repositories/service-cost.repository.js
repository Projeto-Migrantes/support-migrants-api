import ServiceCost from '../models/ServiceCost.js';

class ServiceCostRepository {
  async findAll() {
    return await ServiceCost.findAll();
  }
}

export default new ServiceCostRepository();
