import formService from '../services/form.service.js';

class FormController {
  async findAll(req, res) {
    try {
      let forms;
      if (req.query.status) {
        forms = await formService.findByStatus(req.query.status);
      } else {
        forms = await formService.findAll();
      }
      return res.status(200).json({ data: forms });
    } catch (error) {
      if (error.cause === 'invalid enum') {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new FormController();
