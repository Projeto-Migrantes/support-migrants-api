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
    description_pt: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    description_fr: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    description_es: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    description_en: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: 'institutions_descriptions',
    timestamps: false,
  },
);

export default InstitutionDescriptions;
