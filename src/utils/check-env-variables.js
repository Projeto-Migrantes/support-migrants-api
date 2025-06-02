import logger from '../config/logger.config.js';

const requiredEnvVars = [
  'DB_HOST',
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME',
  'DB_PORT',
  'DB_DIALECT',
  'ADM_NAME',
  'ADM_EMAIL',
  'ADM_PASSWORD',
  'ADM_ROLE',
  'SV_PORT',
  'NODE_ENV',
  'JWT_SECRET',
];

function checkEnvVariables() {
  let allDefined = true;

  requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
      logger.warn(`Environment variable ${key} is not defined!`);
      allDefined = false;
    }
  });

  if (!allDefined) {
    logger.error(
      'One or more required environment variables are missing. Please set them before running the app.',
    );
    process.exit(1);
  }
}

export default checkEnvVariables;
