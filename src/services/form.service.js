import formRepository from '../repositories/form.repository.js';

class FormService {
  async findAll() {
    return await formRepository.findAll();
  }

  async findById(id) {
    const form = await formRepository.findById(id);

    if (!form) {
      throw new Error('form not found');
    }
    return form;
  }
}

export default new FormService();
