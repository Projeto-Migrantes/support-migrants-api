import Term from '../models/Term.js';

class TermRepository {
  async create(data) {
    return await Term.create(data);
  }

  async findAll() {
    return await Term.findAll();
  }

  async findByType(type) {
    return await Term.findOne({ where: { type } });
  }

  async update(data, type) {
    return await Term.update(data, { where: { type } });
  }
}

export default new TermRepository();
