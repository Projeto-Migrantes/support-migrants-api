import ServicesOffered from '../models/ServicesOffered.js';

class ServicesOfferedRepository {
  async findAll() {
    return await ServicesOffered.findAll();
  }
}

export default new ServicesOfferedRepository();
