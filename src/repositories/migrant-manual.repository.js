import MigrantManual from '../models/MigrantManual.js';

class MigrantManualRepository {
  async create(data) {
    return await MigrantManual.create(data);
  }

  async findAll() {
    return await MigrantManual.findAll({ order: [['id', 'DESC']] });
  }

  async update(data, id) {
    return await MigrantManual.update(
      { ...data },
      {
        where: { id },
      },
    );
  }

  async findByLanguage(language) {
    return await MigrantManual.findOne({
      where: { language: language },
    });
  }
}

export default new MigrantManualRepository();
