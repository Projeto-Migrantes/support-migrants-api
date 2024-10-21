import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an category template for the database
const Category = connection.define('Category', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      category_pt: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      category_fr: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      category_es: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      category_en: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
}, {
    tableName: 'categories',
    timestamps: false,
});

export default Category;