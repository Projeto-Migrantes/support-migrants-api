import formRepository from '../repositories/form.repository.js';

class FormService {
  async findAll() {
    return await formRepository.findAll();
  }
}

export default new FormService();
