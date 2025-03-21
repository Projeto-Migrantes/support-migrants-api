import express from 'express';
import limiter from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';

import addressRoutes from './src/routes/addressRoutes.js';
import institutionRoutes from './src/routes/institutionRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import serviceStationRoutes from './src/routes/serviceStationRoutes.js';
import migrantRoutes from './src/routes/migrantRoutes.js';
import authRoutes from './src/routes/auth.js';
import formRoutes from './src/routes/formRoutes.js';
import pdfRoutes from './src/routes/pdfRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import termRoutes from './src/routes/termRoutes.js';

import authKey from './src/middlewares/authKey.js';
import { errorHandler, notFoundHandler } from './src/middlewares/errorHandler.js';
import helmet from 'helmet';
import cors from 'cors';

import createDatabase from './src/createDatabase.js';

import dotenv from 'dotenv';
dotenv.config();

createDatabase("migrantes_db_dev");

if(!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PWD) {
    console.error(`Error: Missing settings in .env file`);
    process.exit(1);
};

console.log(process.cwd);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

// Configurando o CORS

app.disable('x-powered-by');

app.use(cors({
    exposedHeaders: ['Authorization'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));

//app.use(authKey);

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
