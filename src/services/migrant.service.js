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

  async count() {
    return await migrantRepository.count();
  }

  async search(query) {
    const migrant = await migrantRepository.search(query);
    if (migrant.length === 0) {
      throw new Error('migrant not found');
    }

    return migrant;
  }

  async create(data) {
    const t = await sequelize.transaction();
    try {
      await this.checkIfDataExists(data.migrant);

      let address = null;

      if (data.address) {
        address = await addressService.exists(data.address.postal_code, t);
        data.migrant.address_id = address.id;
      }

      data.migrant.password = await createHash(data.migrant.password);

      const migrant = await migrantRepository.create(data.migrant, t);

      await t.commit();

      delete migrant.dataValues.password;

      return {
        migrant,
        address,
      };
    } catch (error) {
      console.log(error);
      await t.rollback();
      throw error;
    }
  }

  async update(data, id) {
    const t = await sequelize.transaction();
    try {
      const migrantExists = await migrantRepository.findById(id);
      if (!migrantExists) {
        throw new Error('migrant not found');
      }

      let address = null;
      if (data.address) {
        address = await addressService.exists(data.address.postal_code, t);
        data.migrant.address_id = address.id;
      }

      if (data.password) {
        data.password = createHash(data.password);
      }

      const migrant = await migrantRepository.update(data.migrant, id, t);

      await t.commit();

      if (migrant && migrant.dataValues) {
        delete migrant.dataValues.password;
      }

      return {
        migrant,
        address,
      };
    } catch (error) {
      if (!t.finished) {
        await t.rollback();
      }
      throw error;
    }
  }

  async checkIfDataExists(data) {
    const existingMigrant = await migrantRepository.checkIfDataExists(data);

    const { email, phone_number, crnm } = data;

    if (existingMigrant) {
      if (existingMigrant.email === email) {
        throw new Error('email already exists', { cause: 'conflict' });
      }
      if (existingMigrant.phone_number === phone_number) {
        throw new Error('phone number already exists', { cause: 'conflict' });
      }
      if (existingMigrant.crnm === crnm) {
        throw new Error('crnm already exists', {
          cause: 'conflict',
        });
      }
    }
  }
}

export default new MigrantService();
