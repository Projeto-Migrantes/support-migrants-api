import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { corsOptions } from './cors.config.js';
import limiter from '../middlewares/rateLimiter.js';
import routes from '../routes/index.js';
import authKey from '../middlewares/authKey.js';
import { errorHandler, notFoundHandler } from '../middlewares/errorHandler.js';

const app = express();

app.use(express.json());

app.use(cors(corsOptions));
app.use(helmet());
app.use(limiter);

app.use(authKey);

app.use('/api/v2', routes);

app.get('/api/v2', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the support-migrants api',
    status: 'online',
    version: '2.0.0',
    uptime: `${process.uptime().toFixed(0)}s`,
    environment: process.env.NODE_ENV || 'development',
    current_time: new Date().toISOString(),
  });
});

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
