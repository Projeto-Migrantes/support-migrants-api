import logger from '../../config/logger.config.js';

export const requestLogger = (req, res, next) => {
  logger.info(`Request received - ${req.method} ${req.originalUrl}`, {
    context: 'Server',
  });
  next();
};
