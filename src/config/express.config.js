import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { corsOptions } from './cors.config.js';
import limiter from '../middlewares/rateLimiter.js';
import routes from '../routes/index.js';
import authKey from '../middlewares/auth-api.middleware.js';
import {
  errorHandler,
  notFoundHandler,
} from '../middlewares/error-handler.middleware.js';

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const app = express();

app.use(express.json());

app.use(cors(corsOptions));
app.use(helmet());
app.use(limiter);

app.use(authKey);
app.use('/api/v2', routes);

const swaggerDocument = YAML.load(
  path.join(process.cwd(), 'src/docs', 'api-docs.yaml'),
);

app.use('/api/v2/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/v2', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the support-migrants api',
    status: 'online',
    version: '2.0.0',
    uptime: `${process.uptime().toFixed(0)}s`,
    environment: process.env.NODE_ENV || 'development',
    current_time: new Date().toISOString(),
    documentation_url: `${baseUrl}/api/v2/api-docs`,
  });
});

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
