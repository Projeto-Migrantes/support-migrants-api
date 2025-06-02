import adminRepository from '../repositories/admin.repository.js';

class AdminService {
  async findByEmail(email) {
    const admin = await adminRepository.findByEmail(email);
    if (!admin) {
      throw new Error('admin not found');
    }
    return admin;
  }
}

export default new AdminService();
