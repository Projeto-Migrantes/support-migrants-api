import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';
import Address from './Address.js';

const Migrant = connection.define(
  'Migrant',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    crnm: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    registration_data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    consent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address_complement: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address_number: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    social_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    language_preference: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    entry_into_brazil: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    migration_reason: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    country_of_origin: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    marital_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    literacy_level: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: 'migrants',
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    scopes: {
      withPassword: { attributes: {} },
    },
  },
);

Migrant.belongsTo(Address, { foreignKey: 'address_id' });

Address.hasMany(Migrant, { foreignKey: 'address_id' });

export default Migrant;
