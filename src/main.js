import './config/dotenv.config.js';
import sequelize from './config/database.config.js';
import logger from './config/logger.config.js';
import app from './config/express.config.js';

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate().then(() => {
      logger.info('Database connection established successfully.', { context: 'Database' })
    });
    
  } catch (error) {
    logger.error('Error establishing database connection', {
      context: 'Database',
    });
    logger.error(error)
    process.exit(1);
  }
};

const initializeServer = async () => {
  const port = process.env.SV_PORT ?? 3000;
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}...`, { context: 'Server' });
  });
};

const bootstrap = async () => {
  await initializeDatabase();
  initializeServer();
};

bootstrap();
