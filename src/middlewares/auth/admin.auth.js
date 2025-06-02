import jwt from 'jsonwebtoken';
import { compareHash } from '../../utils/hash-password.util.js';
import adminService from '../../services/admin.service.js';
import 'dotenv/config';

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminService.findByEmail(email);

    if (!admin) {
      return res.status(403).json({ message: 'invalid credentials' });
    }

    const isPasswordValid = await compareHash(password, admin.password);

    if (!isPasswordValid) {
      return res.status(403).json({ message: 'invalid credentials' });
    }

    const token = jwt.sign(
      {
        sub: admin.id,
        email: admin.email,
        full_name: admin.full_name,
        role: 'admin',
      },
      process.env.JWT_SECRET,
    );

    return res.status(200).json({
      token,
    });
  } catch (error) {
    if (error.message === 'admin not found') {
      return res.status(403).json({ message: 'invalid credentials' });
    }
    return res.status(500).json({
      message: 'server error',
      error: error.message,
    });
  }
};

export const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, admin) => {
    if (error) {
      return res.status(403).json({ message: 'unauthorized' });
    }

    if (admin.role !== 'admin') {
      return res.status(403).json({ message: 'unauthorized' });
    }

    req.admin = admin;
    next();
  });
};
