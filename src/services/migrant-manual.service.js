import migrantManualRepository from '../repositories/migrant-manual.repository.js';

class MigrantManualService {
  async create(data) {
    return await migrantManualRepository.create(data);
  }

  async findAll() {
    return await migrantManualRepository.findAll();
  }
}

export default new MigrantManualService();
