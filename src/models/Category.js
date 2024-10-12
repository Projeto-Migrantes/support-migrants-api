import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an category template for the database
const Category = connection.define('category', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      description: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
}, {
    tableName: 'category',
    timestamps: false,
});

export default Category;