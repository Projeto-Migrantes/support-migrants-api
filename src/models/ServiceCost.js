import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const ServicesCost = sequelize.define(
  'ServiceCost',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    services_costs_pt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    services_costs_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    services_costs_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    services_costs_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'services_costs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default ServicesCost;
