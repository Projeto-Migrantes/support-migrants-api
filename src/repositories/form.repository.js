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

  async create(form) {
    return await Form.create(form);
  }

  async countPedding() {
    return await Form.count({ where: { status: 'unread' } });
  }

  async delete(id) {
    return await Form.destroy({ where: { id } });
  }
}

export default new FormRepository();
