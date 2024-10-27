import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an User IR template for the database
const UserIR = connection.define('UserIR', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      name: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(120),
        allowNull: false
      },
}, {
    tableName: 'users_ir',
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
    scopes: {
      withPassword: { attributes: {} }
    }
});

export default UserIR;