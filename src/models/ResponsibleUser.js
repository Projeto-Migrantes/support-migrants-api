import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define a responsible user model for the database
const ResponsibleUser = connection.define('ResponsibleUser', { 
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
      position: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      sector: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      role: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
}, {
    tableName: "responsibles_users",
    timestamps: false,
}); 

export default ResponsibleUser;