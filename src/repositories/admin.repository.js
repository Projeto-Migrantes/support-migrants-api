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

  async update(id, data) {
    return await Admin.update(
      {
        data,
      },
      {
        where: { id },
      },
    );
  }

  async delete(id) {
    return await Admin.destroy({ where: { id } });
  }

  async count() {
    return await Admin.count();
  }

  async findByEmail(email) {
    return await Admin.scope('withPassword').findOne({
      raw: true,
      where: { email },
    });
  }
}

export default new AdminRepository();
