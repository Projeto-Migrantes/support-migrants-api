import Admin from '../models/Admin.js';

class AdminRepository {
  async create(data) {
    return await Admin.create(data);
  }

  async findAll() {
    return await Admin.findAll({
      order: [['id', 'DESC']],
    });
  }

  async findById(id) {
    return await Admin.findByPk(id);
  }

  async findByEmail(email) {
    return await Admin.scope('withPassword').findOne({
      raw: true,
      where: { email },
    });
  }
}

export default new AdminRepository();
