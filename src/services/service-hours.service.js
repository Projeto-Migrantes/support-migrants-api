import serviceHoursRepository from '../repositories/service-hours.repository.js';

class ServiceHoursService {
  async findAll() {
    return await serviceHoursRepository.findAll();
  }

  async create(data, id, transaction) {
    return await serviceHoursRepository.create(data, id, transaction);
  }
}

export default new ServiceHoursService();
