'use strict';

import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';

import addressRoutes from './src/routes/addressRoutes.js';
import institutionRoutes from './src/routes/institutionRoutes.js';

import { errorHandler, notFoundHandler } from './src/middlewares/errorHandler.js';
import validateInstitution from './src/middlewares/validation/validateInstitution.js';

import swaggerDocsPT from './src/config/swaggerConfigPT.js';
import swaggerDocsEN from './src/config/swaggerConfigEN.js';
import swaggerUi from 'swagger-ui-express';

// Create Tables in DB
createDatabase("migrantes_db_dev");

const app = express();
app.use(express.json());
app.use(limiter);

app.use('/api-docs/pt', swaggerUi.serve, swaggerUi.setup(swaggerDocsPT));
app.use('/api-docs/en', swaggerUi.serve, swaggerUi.setup(swaggerDocsEN));

app.use('/api', addressRoutes);
app.use('/api', institutionRoutes);

// Middleware to handle general errors
app.use(errorHandler);

// Middleware to handle not found routes
app.use(notFoundHandler);

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!');
    })
    .catch(err => {
        console.log('Conexão falhou', err);
    });

app.listen(3000, () => {
    console.log('Rodando');
});
