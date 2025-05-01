import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import 'dotenv/config';

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

app.use('/api/v1', routes);

app.use(errorHandler);

app.use(notFoundHandler);

export default app;
