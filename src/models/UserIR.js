import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an international relations user template for the database
const UserRI = connection.define('user_ir', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      name: {
        type: DataTypes.STRING(100),
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
    tableName: 'user_ir',
}); 

export default UserRI;