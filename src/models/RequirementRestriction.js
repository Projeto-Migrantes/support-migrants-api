import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const RequirementRestriction = sequelize.define(
  'RequirementRestriction',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    requirements_restrictions_pt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    requirements_restrictions_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    requirements_restrictions_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    requirements_restrictions_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'requirements_restrictions',
    timestamps: true,
  },
);

export default RequirementRestriction;
