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
}

export default new TermController();
