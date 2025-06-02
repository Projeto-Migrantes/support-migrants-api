import termService from '../services/term.service.js';
import termsService from '../services/term.service.js';

class TermController {
  async findAll(req, res) {
    try {
      const terms = await termsService.findAll();
      return res.status(200).json({ data: terms });
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async findByType(req, res) {
    try {
      const term = await termsService.findByType(req.params.type);
      return res.status(200).json(term);
    } catch (error) {
      if (error.message === 'term not found') {
        return res.status(404).json({ error: 'term not found' });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const term = await termService.create(req.body);
      res.status(201).json(term);
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      await termService.update(req.body, req.params.type);
      return res.status(204).json();
    } catch (error) {
      if (error.message === 'term not found') {
        return res.status(404).json({ error: 'term not found' });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new TermController();
