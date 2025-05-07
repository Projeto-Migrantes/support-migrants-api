import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';
import Institution from './Institution.js';

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
    tableName: 'services_costs',
    timestamps: true,
  },
);

export default ServicesCost;
