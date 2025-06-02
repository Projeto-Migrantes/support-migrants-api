import ServiceHours from '../models/ServiceHours.js';

class ServiceHoursRepository {
  async findAll() {
    return await ServiceHours.findAll();
  }
}

export default new ServiceHoursRepository();
