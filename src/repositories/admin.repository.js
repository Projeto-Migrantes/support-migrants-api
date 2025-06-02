import Admin from '../models/Admin.js';

class AdminRepository {
  async create(data) {
    return await Admin.create(data);
  }

  async findByEmail(email) {
    return await Admin.scope('withPassword').findOne({
      raw: true,
      where: { email },
    });
  }
}

export default new AdminRepository();
