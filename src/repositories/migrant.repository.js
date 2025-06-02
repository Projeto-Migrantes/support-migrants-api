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
}

export default new MigrantRepository();
