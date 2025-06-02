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

  async update(data, id) {
    const form = await formRepository.update(data, id);

    if (form == 0) {
      throw new Error('form not found');
    }
    return form;
  }

  async findByStatus(status) {
    let forms;

    const enumStatus = ['resolved', 'read', 'unread', 'all'];

    if (!enumStatus.includes(status)) {
      throw new Error(
        "invalid enum. use 'resolved', 'read', 'unread' or 'all'",
        { cause: 'invalid enum' },
      );
    }

    if (status === 'all') {
      return await formRepository.findAll();
    } else {
      forms = await formRepository.findByStatus(status);
    }

    return forms;
  }

  async create(data) {
    return await formRepository.create(data);
  }

  async countPedding() {
    return await formRepository.countPedding();
  }
}

export default new FormService();
