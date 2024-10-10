const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const Endereco = require('./Endereco');
const Categoria = require('./Categoria');

// Definir um modelo para o DB
const Organizacao = connection.define('organizacao', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      razao_social: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      nome_fantasia: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      cnpj: {
        type: DataTypes.STRING(20),
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
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      descricao_pt: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      descricao_en: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      descricao_fr: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      descricao_es: {
        type: DataTypes.STRING(255),
        allowNull: false
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
      site: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
}, {
    tableName: 'organizacao',
}); 

// Organização possue um endereco
Organizacao.belongsTo(Endereco, { foreignKey: 'endereco_id' });

// Endereco possue várias organizações
Endereco.hasMany(Organizacao, { foreignKey: 'endereco_id' });

// Organização possue uma categoria
Organizacao.belongsTo(Categoria, { foreignKey: 'categoria_id' });

// Cateogria possue várias organizações
Categoria.hasMany(Organizacao, { foreignKey: 'categoria_id' });


module.exports = Organizacao;