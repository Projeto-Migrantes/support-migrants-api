import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';
dotenv.config();

// Create the database connection
// Configure the certificate later
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    timezone: process.env.DB_TZ,
    dialectModule: pg,
    logging: false
});

export default connection;