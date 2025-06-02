import migrantManualRepository from '../repositories/migrant-manual.repository.js';

class MigrantManualService {
  async create(data) {
    return await migrantManualRepository.create(data);
  }

  async findAll() {
    return await migrantManualRepository.findAll();
  }

  async update(data, id) {
    const migrantManual = await migrantManualRepository.update(data, id);
    if (migrantManual === 0) {
      throw new Error('migrant manual not found');
    }
    return migrantManual;
  }
}

export default new MigrantManualService();
