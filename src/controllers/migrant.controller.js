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

  async profile(req, res) {
    try {
      const migrant = await migrantService.findById(req.params.id);

      if (migrant.id !== req.user.sub && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'unauthorized' });
      }

      return res.status(200).json(migrant);
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async findById(req, res) {
    try {
      const migrant = await migrantService.findById(req.params.id);
      return res.status(200).json(migrant);
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new MigrantController();
