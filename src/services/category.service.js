import categoryRepository from '../repositories/category.repository.js';

class CategoryService {
  async findAll() {
    return await categoryRepository.findAll();
  }
}

export default new CategoryService();
