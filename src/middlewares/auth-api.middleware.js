import 'dotenv/config';

const validateStaticKey = (req, res, next) => {
  const key = req.headers['x-private-key'];

  if (key !== process.env.PRIVATE_KEY) {
    return res.status(401).json({ message: 'error consuming API' });
  }

  next();
};

export default validateStaticKey;
