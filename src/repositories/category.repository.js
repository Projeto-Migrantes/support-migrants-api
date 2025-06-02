import Category from '../models/Category.js';

class CategoryRepository {
  async findAll() {
    return await Category.findAll({ order: [['id', 'DESC']] });
  }

  async findById(id) {
    return await Category.findOne(id);
  }
}

export default new CategoryRepository();
