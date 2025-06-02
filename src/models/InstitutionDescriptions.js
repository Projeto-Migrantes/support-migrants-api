import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';

const InstitutionDescriptions = connection.define(
  'InstitutionDescriptions',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    institution_description_pt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    institution_description_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    institution_description_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    institution_description_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'institutions_descriptions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default InstitutionDescriptions;
