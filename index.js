import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';
import addressRoutes from './src/routes/addressRoutes.js';
import institutionRoutes from './src/routes/institutionRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import serviceStationRoutes from './src/routes/serviceStationRoutes.js';
import migrantRoutes from './src/routes/migrantRoutes.js';
import authRoutes from './src/routes/auth.js';
import formRoutes from './src/routes/formRoutes.js';
import pdfRoutes from './src/routes/pdfRoutes.js';
import { errorHandler, notFoundHandler } from './src/middlewares/errorHandler.js';
import cors from 'cors';


import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import yaml from 'js-yaml';

import dotenv from 'dotenv';
dotenv.config()

// Create Tables in DB
 createDatabase("migrantes_db_dev");

const swaggerDocument = yaml.load(fs.readFileSync('./src/config/swagger.yaml', 'utf8'));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(limiter);

// Configuração do Swagger
app.use('/api-docs/pt', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', 
    addressRoutes, 
    institutionRoutes, 
    categoryRoutes, 
    serviceStationRoutes, 
    migrantRoutes, 
    authRoutes, 
    formRoutes,
    pdfRoutes
);

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
