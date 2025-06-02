import migrantManualRepository from '../repositories/migrant-manual.repository.js';

class MigrantManualService {
  async create(data) {
    return await migrantManualRepository.create(data);
  }
}

export default new MigrantManualService();
