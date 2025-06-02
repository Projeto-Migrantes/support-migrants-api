import Term from '../models/Term.js';
import termRepository from '../repositories/term.repository.js';

class TermService {
  async findAll() {
    return await Term.findAll();
  }
}

export default new TermService();
