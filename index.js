'use strict';

import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';

import addressRoutes from './src/routes/addressRoutes.js';
import validateOrganization from './src/middlewares/validation/validateOrganization.js';
import organizationSchema from './src/schemas/organizationSchema.js';

// Create Tables in DB
//createDatabase("migrantes_db_dev");


const app = express();

app.use(limiter);
app.use(express.json());

app.use(addressRoutes);

app.post('/organization', validateOrganization, (req, res) => {
    res.status(200).json(req.body);
});


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
