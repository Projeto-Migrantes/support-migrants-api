import categoryService from '../services/category.service.js';

class CategoryController {
  async findAll(req, res) {
    try {
      const categories = await categoryService.findAll();
      return res.status(200).json({ data: categories });
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}
export default new CategoryController();
