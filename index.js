'use strict';

import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';

import addressRoutes from './src/routes/addressRoutes.js';
import validateOrganization from './src/middlewares/validation/validateOrganization.js';


import Organization from './src/models/Organization.js';
import Address from './src/models/Address.js';
import Category from './src/models/Category.js';


// Create Tables in DB
// createDatabase("migrantes_db_dev");


const app = express();

app.use(limiter);
app.use(express.json());

app.use(addressRoutes);

const createOrganization = async (req, res) => {
  try {
    const address = await Address.create(req.body.address);
    const category = await Category.create(req.body.category);

    const organization = await Organization.create({
        ...req.body,
        address_id: address.id,
        category_id: category.id
    });

    return res.status(201).json({ message: "Organização criada com sucesso!", organization });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }  
};

app.post('/organization', validateOrganization, createOrganization);
app.get('/organization', (req, res) => {
    Organization.findAll().then(organizations => {
        res.status(200).json({organizations});
    });
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
