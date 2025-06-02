export const validateID = (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  const id = req.params.id;
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: 'ID must be a valid number!' });
  }
  next();
};
