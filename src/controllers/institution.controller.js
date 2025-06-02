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

  async findByCategory(req, res) {
    try {
      let institutions;
      const id = req.params.id;

      if (!id) {
        institutions = await institutionService.findAll();
      } else {
        institutions = await institutionService.findAllByCategory(id);
      }

      return res.status(200).json({ data: institutions });
    } catch (error) {
      if (error.error === 'institutions not found with this category') {
        return res
          .status(404)
          .json({ error: 'institutions not found with this category' });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async search(req, res) {
    try {
      const query = req.query.q;

      if (!query) {
        return res
          .status(400)
          .json({ message: 'query string (q) is required' });
      }

      const institutions = await institutionService.search(query);

      return res.status(200).json({ data: institutions });
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

  async count(req, res) {
    try {
      const count = await institutionService.count();

      return res.status(200).json({ count });
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const instituion = await institutionService.create(req.body);

      return res.status(201).json({ data: instituion });
    } catch (error) {
      if (error.cause === 'conflict') {
        return res.status(409).json({ error: error.message });
      }

      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      await institutionService.update(req.body, req.params.id);
      return res.status(204).json();
    } catch (error) {
      if (error.cause === 'conflict') {
        return res.status(409).json({ error: error.message });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async emailExist(req, res) {
    try {
      const emailExist = await institutionService.findByEmail(req.body.email);
      if (emailExist) {
        return res.json({ exists: true });
      }
      return res.json({ exists: false });
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new InstitutionController();
