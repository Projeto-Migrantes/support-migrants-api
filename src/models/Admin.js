import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an admin template for the database
const Admin = connection.define('Admin', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      userName: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(120),
        allowNull: false
      },
}, {
    tableName: 'admins',
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
    scopes: {
      withPassword: { attributes: {} }
    }
});

export default Admin;