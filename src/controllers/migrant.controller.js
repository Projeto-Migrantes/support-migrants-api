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

  async count(req, res) {
    try {
      const count = await migrantService.count();

      return res.status(200).json({ count });
    } catch (error) {
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

      const migrants = await migrantService.search(query);

      return res.status(200).json({ data: migrants });
    } catch (error) {
      if (error.message === 'migrant not found') {
        return res.status(404).json({ error: 'migrant not found' });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const migrant = await migrantService.create(req.body);

      return res.status(201).json({ data: migrant });
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
      await migrantService.update(req.body, req.params.id);
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
      const emailExist = await migrantService.findByEmail(req.body.email);
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

  async delete(req, res) {
    try {
      await migrantService.delete(req.params.id);
      return res.status(204).json();
    } catch (error) {
      if (error.message === 'migrant not found') {
        return res.status(404).json({ error: 'migrant not found' });
      }
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new MigrantController();
