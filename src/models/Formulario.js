const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const Migrante = require('./Migrante');

const Formulario = connection.define('formulario', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      assunto: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      mensagem: {
        type: DataTypes.STRING(700),
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
}, {
    tableName: 'formulario',
});

// Formulário possue um Migrante
Formulario.belongsTo(Migrante, { foreignKey: 'migrante_id' });

// Migrante possue vários formulários
Migrante.hasMany(Formulario, { foreignKey: 'migrante_id' });

module.exports = Formulario;