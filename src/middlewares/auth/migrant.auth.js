import jwt from 'jsonwebtoken';
import { compareHash } from '../../utils/hash-password.util.js';
import migrantService from '../../services/migrant.service.js';
import 'dotenv/config';

export const loginMigrant = async (req, res) => {
  try {
    const { email, password } = req.body;
    const migrant = await migrantService.findByEmail(email);

    if (!migrant) {
      return res.status(403).json({ message: 'invalid credentials' });
    }

    const isPasswordValid = await compareHash(password, migrant.password);

    if (!isPasswordValid) {
      return res.status(403).json({ message: 'invalid credentials' });
    }

    const token = jwt.sign(
      {
        sub: migrant.id,
        email: migrant.email,
        full_name: migrant.full_name,
        role: 'migrant'
      },
      process.env.JWT_SECRET,
    );

    return res.status(200).json({
      token,
    });
  } catch (error) {
    if (error.message === 'migrant not found') {
      return res.status(403).json({ message: 'invalid credentials' });
    }
    return res.status(500).json({
      message: 'server error',
      error: error.message,
    });
  }
};

export const verifyMigrant = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, migrant) => {
    if (error) {
      return res.status(403).json({ message: 'unauthorized' });
    }

    if (migrant.role !== 'migrant') {
      return res.status(403).json({ message: 'unauthorized' });
    }

    req.migrant = migrant;
    next();
  });
};
