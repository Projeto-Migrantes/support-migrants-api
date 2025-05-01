import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';
dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_DIALECT } =
  process.env;

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectModule: pg,
    logging: false,
  },
);

export default connection;
