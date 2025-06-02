import institutionService from '../services/institution.service.js';

class InstitutionController {
  async findAll(req, res) {
    try {
      const institutions = await institutionService.findAll();

      return res.status(200).json({ data: institutions });
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async findById(req, res) {
    try {
      const instituion = await institutionService.findById(req.params.id);
      return res.status(200).json({ data: instituion });
    } catch (error) {
      if (error.message === 'institutions not found') {
        return res.status(404).json({ error: 'institutions not found' });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new InstitutionController();
