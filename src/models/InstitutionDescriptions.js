import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';
import Institution from './Institution.js';

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
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    institutions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Institution,
        key: 'id',
      },
    },
  },
  {
    tableName: 'institutions_descriptions',
    timestamps: true,
  },
);

export default InstitutionDescriptions;
