import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Category = sequelize.define(
  'Category',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    category_pt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Category;
