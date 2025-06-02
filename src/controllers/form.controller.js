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

  async findById(req, res) {
    try {
      const form = await formService.findById(req.params.id);
      return res.status(200).json(form);
    } catch (error) {
      if (error.message === 'form not found') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const data = req.body;
      const { id } = req.params;

      await formService.update(data, id);
      return res.status(204).json();
    } catch (error) {
      if (error.message === 'form not found') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new FormController();
