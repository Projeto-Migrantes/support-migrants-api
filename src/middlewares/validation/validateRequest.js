const validateRequest =
  (schema, type = 'body') =>
  async (req, res, next) => {
    try {
      const value = await schema.validateAsync(req[type], {
        abortEarly: false,
      });

      req[type] = value;
      next();
    } catch (error) {
      if (error.isJoi) {
        const errors = error.details.map((detail) => ({
          field: detail.path.join('.'),
          message: detail.message,
        }));
        return res.status(400).json({
          message: 'Validation error',
          errors: errors,
        });
      }
      next(error);
    }
  };

export default validateRequest;
