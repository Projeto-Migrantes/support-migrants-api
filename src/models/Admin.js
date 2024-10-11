import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Definir um modelo para o DB
const Admin = connection.define('admin', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    tableName: 'admin',
});

export default Admin;