const Sequelize = require('sequelize');

// Carregar variáveis de ambiente
require('dotenv').config();

// Criar a conexão com o banco de dados
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    timezone: process.env.DB_TZ,
});

module.exports = connection;