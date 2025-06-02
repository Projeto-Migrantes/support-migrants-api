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
}

export default new FormRepository();
