import Term from '../models/Term.js';
import termRepository from '../repositories/term.repository.js';

class TermService {
  async findAll() {
    return await Term.findAll();
  }

  async findByType(type) {
    const term = await Term.findById({ where: { type } });
    if (term === 0) {
      throw new Error('term not found');
    }
    return term;
  }

  async create(data) {
    return await Term.create(data);
  }

  async update(data, type) {
    const term = await termRepository.update(data, type);
    if (term === 0) {
      throw new Error('term not found');
    }
    return term;
  }
}

export default new TermService();
