import Form from '../models/Form.js';

class FormRepository {
  async findAll() {
    return await Form.findAll({
      order: [['id', 'DESC']],
    });
  }

  async findById(id) {
    return await Form.findByPk(id);
  }

  async update(data, id) {
    return await Form.update(data, {
      where: { id },
    });
  }

  async findByStatus(status) {
    return await Form.findAll({
      order: [['id', 'DESC']],
      where: { status },
    });
  }
}

export default new FormRepository();
