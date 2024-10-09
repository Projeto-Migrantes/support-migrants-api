const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const Endereco = require('./Endereco');

const PostoAtendimento = connection.define('posto_atendimento', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      nome: {
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
    tableName: 'posto_atendimento',
});

// Posto de Atendimento possue um endereço
PostoAtendimento.belongsTo(Endereco, { foreignKey: 'endereco_id' });

// Endereco possue várias postos de endereço
Endereco.hasMany(PostoAtendimento, { foreignKey: 'endereco_id' });

module.exports = PostoAtendimento;