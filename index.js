import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';
import createDatabase from './src/createDatabase.js';

import addressRoutes from './src/routes/addressRoutes.js';
import institutionRoutes from './src/routes/institutionRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import serviceStationRoutes from './src/routes/serviceStationRoutes.js';
import migrantRoutes from './src/routes/migrantRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import authRoutes from './src/routes/auth.js';
import formRoutes from './src/routes/formRoutes.js';
import pdfRoutes from './src/routes/pdfRoutes.js';
import termRoutes from './src/routes/termRoutes.js';

import authKey from './src/middlewares/authKey.js';
import { errorHandler, notFoundHandler } from './src/middlewares/errorHandler.js';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config()

// Create Tables in DB
createDatabase("migrantes_db_dev");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configurando o CORS
app.use(cors({
    exposedHeaders: ['Authorization'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));

app.use(authKey);

app.use(limiter);

app.use('/api/v1', 
    addressRoutes, institutionRoutes, categoryRoutes, 
    serviceStationRoutes, 
    migrantRoutes, 
    authRoutes, 
    formRoutes,
    pdfRoutes,
    termRoutes,
    userRoutes
);

// Middleware to handle general errors
app.use(errorHandler);

// Middleware to handle not found routes
app.use(notFoundHandler);

connection.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

   
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
