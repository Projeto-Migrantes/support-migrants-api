import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

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
  },
  {
    tableName: 'services_offered',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default ServicesOffered;
