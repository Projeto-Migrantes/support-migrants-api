import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';
import Institution from './Institution.js';

const ServiceHours = sequelize.define(
  'ServiceHours',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    service_hours_pt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    service_hours_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    service_hours_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    service_hours_en: {
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
    tableName: 'services_hours',
    timestamps: true,
  },
);

export default ServiceHours;
