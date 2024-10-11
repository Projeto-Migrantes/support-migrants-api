import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Definir um modelo para o DB
const UsuarioRI = connection.define('usuario_ri', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
      },
      senha: {
        type: DataTypes.STRING(12),
        allowNull: false
      },
}, {
    tableName: 'usuario_ri',
}); 

export default UsuarioRI;