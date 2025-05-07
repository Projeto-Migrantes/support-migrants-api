const dotenv = require('dotenv');

const env = process.env.NODE_ENV;
dotenv.config({ path: `.env.${env}.local` });

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT,
};
