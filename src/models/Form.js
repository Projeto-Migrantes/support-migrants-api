import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';
import Migrant from './Migrant.js';

const Form = connection.define(
  'Form',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    migrants_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Migrant,
        key: 'id',
      },
    },
    status: {
      type: DataTypes.ENUM('resolved', 'read', 'unread'),
      allowNull: false,
      defaultValue: 'unread',
    },
  },
  {
    tableName: 'forms',
    timestamps: true,
  },
);

export default Form;
