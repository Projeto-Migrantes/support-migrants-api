import Sequelize from 'sequelize';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

// Create the database connection
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    timezone: process.env.DB_TZ,
});

export default connection;