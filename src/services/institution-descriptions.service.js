import institutionDescriptionsRepository from '../repositories/institution-descriptions.repository.js';

class InstitutionDescriptionsService {
  async findAll() {
    return await institutionDescriptionsRepository.findAll();
  }

  async create(data, id, transaction) {
    return await institutionDescriptionsRepository.create(
      data,
      id,
      transaction,
    );
  }

  async update(data, id, transaction) {
    return await institutionDescriptionsRepository.update(
      data,
      id,
      transaction,
    );
  }
}

export default new InstitutionDescriptionsService();
