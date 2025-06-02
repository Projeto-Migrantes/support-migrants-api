import sequelize from '../config/database.config.js';
import migrantRepository from '../repositories/migrant.repository.js';
import addressService from '../services/address.service.js';
import { createHash } from '../utils/hash-password.util.js';

class MigrantService {
  async findAll() {
    return migrantRepository.findAll();
  }
}

export default new MigrantService();
