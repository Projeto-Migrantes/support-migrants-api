import Category from '../models/Category.js';

class CategoryRepository {
  async findAll() {
    return await Category.findAll({ order: [['id', 'DESC']] });
  }
}

export default new CategoryRepository();
