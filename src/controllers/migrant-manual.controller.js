import manualService from '../services/migrant-manual.service.js';

class MigrantManualController {
  async create(req, res) {
    try {
      const manual = await manualService.create(req.body);
      return res.status(201).json(manual);
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new MigrantManualController();
