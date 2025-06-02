import serviceHoursRepository from '../repositories/service-hours.repository.js';

class ServiceHoursService {
  async findAll() {
    return await serviceHoursRepository.findAll();
  }
}

export default new ServiceHoursService();
