const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const Endereco = require('./Endereco');

// Definir um modelo para o DB
const PostoAtendimento = connection.define('posto_atendimento', {
  id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }, 
  nome: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true
  },
  telefone_principal: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true
  },
  telefone_secundario: {
    type: DataTypes.STRING(15),
    allowNull: true,
    unique: true
  },
  instagram: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  numero_endereco: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  complemento_endereco: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
}, {
    tableName: 'posto_atendimento',
});

// Posto de Atendimento possue um endereço
PostoAtendimento.belongsTo(Endereco, { foreignKey: 'endereco_id' });

// Endereco possue várias postos de endereço
Endereco.hasMany(PostoAtendimento, { foreignKey: 'endereco_id' });

module.exports = PostoAtendimento;