import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const TargetPopulation = sequelize.define(
  'TargetPopulation',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    target_populations_pt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    target_populations_fr: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    target_populations_es: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    target_populations_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'targets_populations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default TargetPopulation;
