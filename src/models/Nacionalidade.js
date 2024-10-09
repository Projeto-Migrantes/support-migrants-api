const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const Nacionalidade = connection.define('nacionalidade', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      descricao: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
},{
    tableName: 'nacionalidade',
});

module.exports = Nacionalidade;