const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const EstadoCivil = connection.define('estado_civil', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    descricao: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    tableName: 'estado_civil',
});

module.exports = EstadoCivil;
