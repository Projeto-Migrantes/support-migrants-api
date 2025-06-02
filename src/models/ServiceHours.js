import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

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
  },
  {
    tableName: 'services_hours',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default ServiceHours;
