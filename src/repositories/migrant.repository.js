import { Op } from 'sequelize';
import Address from '../models/Address.js';
import Migrant from '../models/Migrant.js';

class MigrantRepository {
  async findAll() {
    return await Migrant.findAll({
      order: [['id', 'DESC']],
      include: [{ model: Address, as: 'address' }],
    });
  }

  async findById(id) {
    return await Migrant.findByPk(id, {
      include: [{ model: Address, as: 'address' }],
    });
  }

  async create(data, transaction) {
    return await Migrant.create(data, { transaction });
  }
}

export default new MigrantRepository();
