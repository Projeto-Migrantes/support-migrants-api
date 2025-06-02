import migrantService from '../services/migrant.service.js';

class MigrantController {
  async findAll(req, res) {
    try {
      const migrants = await migrantService.findAll();

      return res.status(200).json({ data: migrants });
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new MigrantController();
