import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';
import Institution from './Institution.js';

const ServicesOffered = sequelize.define(
  'ServicesOffered',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    services_offered_pt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    services_offered_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    services_offered_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    services_offered_en: {
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
    tableName: 'services_offered',
    timestamps: true,
  },
);

export default ServicesOffered;
