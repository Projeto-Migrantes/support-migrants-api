import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';
import Institution from './Institution.js';

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
    tableName: 'targets_populations',
    timestamps: true,
  },
);

export default TargetPopulation;
