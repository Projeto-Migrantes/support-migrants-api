import servicesOfferedRepository from '../repositories/services-offered.repository.js';

class ServicesOfferedService {
  async findAll() {
    return await servicesOfferedRepository.findAll();
  }
}

export default new ServicesOfferedService();
