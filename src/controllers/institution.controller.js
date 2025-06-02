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
}

export default new InstitutionController();
