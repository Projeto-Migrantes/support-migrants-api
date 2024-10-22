'use strict';

import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';

import addressRoutes from './src/routes/addressRoutes.js';
import institutionRoutes from './src/routes/institutionRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import targetRoutes from './src/routes/targetPopulationRoutes.js';

import { errorHandler, notFoundHandler } from './src/middlewares/errorHandler.js';
import validateInstitution from './src/middlewares/validation/validateInstitution.js';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/config/swagger.json' assert { type: 'json' };

// Create Tables in DB
createDatabase("migrantes_db_dev");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(limiter);

// Configuração do Swagger
app.use('/api-docs/pt', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', addressRoutes);
app.use('/api', institutionRoutes);
app.use('/api', categoryRoutes);
app.use('/api', targetRoutes);

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
    console.log(`Servidor Rodando na porta: ${PORT}`);
});
