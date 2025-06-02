import MigrantManual from '../models/MigrantManual.js';

class MigrantManualRepository {
  async create(data) {
    return await MigrantManual.create(data);
  }

  async findAll() {
    return await MigrantManual.findAll({ order: [['id', 'DESC']] });
  }
}

export default new MigrantManualRepository();
