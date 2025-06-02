import ServiceHours from '../models/ServiceHours.js';

class ServiceHoursRepository {
  async findAll() {
    return await ServiceHours.findAll();
  }

  async create(data, id, transaction) {
    return await ServiceHours.create(
      {
        ...data,
        institution_id: id,
      },
      {
        transaction,
      },
    );
  }

  async update(data, id, transaction) {
    return await ServiceHours.update(data, {
      where: { institution_id: id },
      transaction,
    });
  }
}

export default new ServiceHoursRepository();
