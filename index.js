'use strict';

import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';

import addressRoutes from './src/routes/addressRoutes.js';
import organizationRoutes from './src/routes/organizationRoutes.js';

import validateOrganization from './src/middlewares/validation/validateOrganization.js';
import { errorHandler, notFoundHandler } from './src/middlewares/errorHandler.js';

// Create Tables in DB
createDatabase("migrantes_db_dev");

const app = express();

app.use(limiter);


app.use(express.json());

app.use('/api', addressRoutes);
app.use('/api', organizationRoutes);

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
