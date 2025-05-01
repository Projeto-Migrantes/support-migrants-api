import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';

const MigrantManual = connection.define(
  'MigrantManual',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'migrant_manuals',
  },
);

export default MigrantManual;
