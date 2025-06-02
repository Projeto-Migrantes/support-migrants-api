import servicesOfferedRepository from '../repositories/services-offered.repository.js';

class ServicesOfferedService {
  async findAll() {
    return await servicesOfferedRepository.findAll();
  }

  async create(data, id, transaction) {
    return await servicesOfferedRepository.create(data, id, transaction);
  }

  async update(data, id, transaction) {
    return await servicesOfferedRepository.update(data, id, transaction);
  }
}

export default new ServicesOfferedService();
