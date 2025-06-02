import logger from '../config/logger.config.js';

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  logger.error(`Error: ${err.message}`, {
    context: 'ErrorHandler',
    path: req.path,
    method: req.method,
    stack: err.stack,
  });

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      status: 'error',
      message: 'Validation error',
      details: err.details || err.message,
    });
  }

  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    return res.status(400).json({
      status: 'error',
      message: 'Database validation error',
      details: err.errors.map((e) => ({ field: e.path, message: e.message })),
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};

const notFoundHandler = (req, res) => {
  logger.warn(`Route not found: ${req.method} ${req.originalUrl}`, {
    context: 'NotFoundHandler',
  });

  res.status(404).json({
    status: 'error',
    message: 'Resource not found',
    details: `The requested URL ${req.originalUrl} was not found on this server`,
  });
};

export { errorHandler, notFoundHandler };
