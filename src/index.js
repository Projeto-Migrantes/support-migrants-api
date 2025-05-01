import connection from './config/database.config.js';
import app from './config/express.config.js';

const initializeDatabse = async () => {
  try {
    await connection.authenticate();
    console.info('Database connection established successfully.');
  } catch (error) {
    console.error('Error establishing database connection:', error);
    process.exit(1);
  }
};

const initializeServer = async () => {
  const port = process.env.SV_PORT ?? 3000;
  app.listen(port, () => {
    console.info(`Server is running on port ${port}...`);
  });
};

const bootstrap = async () => {
  await initializeDatabse();
  initializeServer();
};

bootstrap();
