import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import UserIR from './UserIR.js';

// Define an file template for the database
const File = connection.define('file', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
}, {
    tableName: 'file',
});

// File has a user
File.belongsTo(UserIR, { foreignKey: 'user_ir_id' });

// User has many files
UserIR.hasMany(File, { foreignKey: 'user_ir_id' });

export default File;
