import institutionDescriptionsRepository from '../repositories/institution-descriptions.repository.js';

class InstitutionDescriptionsService {
  async findAll() {
    return await institutionDescriptionsRepository.findAll();
  }
}

export default new InstitutionDescriptionsService();
