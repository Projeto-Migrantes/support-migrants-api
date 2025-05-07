import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Term = sequelize.define(
  'Term',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    term_condition_pt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    term_condition_fr: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    term_condition_es: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    term_condition_en: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('migrant', 'institution'),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'terms_conditions',
  },
);

export default Term;
