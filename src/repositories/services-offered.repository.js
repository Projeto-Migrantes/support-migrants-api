import ServicesOffered from '../models/ServicesOffered.js';

class ServicesOfferedRepository {
  async findAll() {
    return await ServicesOffered.findAll();
  }

  async create(data, id, transaction) {
    return await ServicesOffered.create(
      {
        ...data,
        institution_id: id,
      },
      { transaction },
    );
  }
}

export default new ServicesOfferedRepository();
