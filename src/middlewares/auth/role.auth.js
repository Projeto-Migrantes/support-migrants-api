import jwt from 'jsonwebtoken';

export const verifyRole = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: 'unauthorized' });
    }

    if (user.role !== 'migrant' && user.role !== 'admin') {
      return res.status(403).json({ message: 'unauthorized' });
    }

    req.user = user;
    next();
  });
};
