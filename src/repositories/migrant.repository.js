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

  async findByEmail(email) {
    return await Migrant.scope('withPassword').findOne({
      raw: true,
      where: { email },
    });
  }

  async update(data, id, transaction) {
    return await Migrant.update(data, {
      where: { id },
      transaction,
    });
  }

  async delete(id) {
    return await Migrant.destroy({ where: { id } });
  }

  async count() {
    return await Migrant.count();
  }
}

export default new MigrantRepository();
