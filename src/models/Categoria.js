const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const Categoria = connection.define('categoria', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
}, {
    tableName: 'categoria',
});

module.exports = Categoria;