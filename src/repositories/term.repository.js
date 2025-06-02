import Term from '../models/Term.js';

class TermRepository {
  async create(data) {
    return await Term.create(data);
  }

  async findAll() {
    return await Term.findAll();
  }
}

export default new TermRepository();
