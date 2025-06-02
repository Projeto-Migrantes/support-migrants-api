import MigrantManual from '../models/MigrantManual.js';

class MigrantManualRepository {
  async create(data) {
    return await MigrantManual.create(data);
  }
}

export default new MigrantManualRepository();
