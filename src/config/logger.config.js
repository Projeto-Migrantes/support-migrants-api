import winston from 'winston';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const { combine, timestamp, printf, colorize, errors, json } = winston.format;

const localTimestamp = () => {
  const date = new Date();
  return date.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
  });
};

const consoleFormat = printf(
  ({ level, message, timestamp, context, stack, ...meta }) => {
    const contextTag = context ? `[${context}]` : '';
    const errorStack = stack ? `\n${stack}` : '';
    const metaInfo = Object.keys(meta).length
      ? `\n${JSON.stringify(meta, null, 2)}`
      : '';
    return `[${timestamp}] ${level} ${contextTag}: ${message}${errorStack}${metaInfo}`;
  },
);

const logDir = path.join(process.cwd(), 'logs');
const errorLogPath = path.join(logDir, 'error.log');
const combinedLogPath = path.join(logDir, 'combined.log');

const logger = winston.createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: combine(
    timestamp({ format: localTimestamp }),
    errors({ stack: true }),
    env === 'production' ? json() : consoleFormat,
  ),
  transports: [
    new winston.transports.Console({
      format: combine(
        env === 'development' ? colorize() : winston.format.uncolorize(),
        timestamp({ format: localTimestamp }),
        errors({ stack: true }),
        consoleFormat,
      ),
    }),
  ],
  exitOnError: false,
});

export const log = (context = '') => ({
  info: (msg) => logger.info(msg, { context, ...meta }),
  error: (msg) => logger.error(msg, { context, ...meta }),
  warn: (msg) => logger.warn(msg, { context, ...meta }),
  debug: (msg) => logger.debug(msg, { context, ...meta }),
  verbose: (msg) => logger.verbose(msg, { context, ...meta }),
});

logger.stream = {
  write: (message) => {
    logger.info(message.trim(), { context: 'HTTP' });
  },
};

export default logger;
