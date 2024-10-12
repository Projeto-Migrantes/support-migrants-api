'use strict';

import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';

// Create Tables in DB
createDatabase("migrantes_db_dev");

import validateOrganization from './src/middlewares/validation/validateOrganization.js';

const app = express();

app.use(limiter);
app.use(express.json());

app.post('/organization', validateOrganization, (req, res) => {
    res.status(200).json({ mensagem: 'Organizacao válida!' });
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
