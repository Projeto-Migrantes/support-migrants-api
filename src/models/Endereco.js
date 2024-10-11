import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Definir um modelo para o DB
const Endereco = connection.define('endereco', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      cep: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      cidade: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      uf: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      bairro: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      logradouro: {
        type: DataTypes.STRING(150),
        allowNull: false
      }
},{
    tableName: 'endereco',
});

export default Endereco;