import InstitutionDescriptions from '../models/InstitutionDescriptions.js';

class InstitutionDescriptionsRepository {
  async findAll() {
    return await InstitutionDescriptions.findAll();
  }

  async create(data, id, transaction) {
    return await InstitutionDescriptions.create(
      {
        ...data,
        institution_id: id,
      },
      {
        transaction,
      },
    );
  }
}

export default new InstitutionDescriptionsRepository();
