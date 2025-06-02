import sequelize from '../config/database.config.js';
import migrantRepository from '../repositories/migrant.repository.js';
import addressService from '../services/address.service.js';
import { createHash } from '../utils/hash-password.util.js';

class MigrantService {
  async findAll() {
    return migrantRepository.findAll();
  }

  async findById(id) {
    const migrant = await migrantRepository.findById(id);

    if (!migrant) {
      throw new Error('migrant not found');
    }

    return migrant;
  }
}

export default new MigrantService();
