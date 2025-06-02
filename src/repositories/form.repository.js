import Form from '../models/Form.js';

class FormRepository {
  async findAll() {
    return await Form.findAll({
      order: [['id', 'DESC']],
    });
  }
}

export default new FormRepository();
