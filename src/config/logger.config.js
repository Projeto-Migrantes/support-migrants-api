import winston from 'winston';

const env = process.env.NODE_ENV || 'development';
const { combine, timestamp, printf, colorize, errors } = winston.format;

const localTimestamp = () => {
  const date = new Date();
  return date.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
  });
};

const logFormat = printf(({ level, message, timestamp, context, stack }) => {
  const contextTag = context ? `[${context}]` : '';
  const errorStack = stack ? `\n${stack}` : '';
  return `[${timestamp}] ${level} ${contextTag}: ${message}${errorStack}`;
});

const logger = winston.createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: combine(
    timestamp({ format: localTimestamp }),
    errors({ stack: true }),
    logFormat,
  ),
  transports: [],
});

logger.add(
  new winston.transports.Console({
    format: combine(
      env === 'development' ? colorize() : winston.format.uncolorize(),
      timestamp({ format: localTimestamp }),
      errors({ stack: true }),
      logFormat,
    ),
  }),
);

export const log = (context = '') => ({
  info: (msg) => logger.info(msg, { context }),
  error: (msg) => logger.error(msg, { context }),
  warn: (msg) => logger.warn(msg, { context }),
  debug: (msg) => logger.debug(msg, { context }),
  verbose: (msg) => logger.verbose(msg, { context }),
});

export default logger;
