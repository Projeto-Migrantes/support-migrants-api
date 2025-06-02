import Term from '../models/Term.js';

class TermRepository {
  async create(data) {
    return await Term.create(data);
  }
}

export default new TermRepository();
