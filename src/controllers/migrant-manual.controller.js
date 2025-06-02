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

  async findAll(req, res) {
    try {
      let manuals;
      if (req.query.language) {
        manuals = await manualService.findByLanguage(req.query.language);
      } else {
        manuals = await manualService.findAll();
      }
      return res.status(200).json({ data: manuals });
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new MigrantManualController();
