import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';

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
    status: {
      type: DataTypes.ENUM('resolved', 'read', 'unread'),
      allowNull: true,
      defaultValue: 'unread',
    },
  },
  {
    tableName: 'forms',
  },
);

export default Form;
