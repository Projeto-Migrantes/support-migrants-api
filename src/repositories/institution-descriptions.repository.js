import InstitutionDescriptions from '../models/InstitutionDescriptions.js';

class InstitutionDescriptionsRepository {
  async findAll() {
    return await InstitutionDescriptions.findAll();
  }
}

export default new InstitutionDescriptionsRepository();
