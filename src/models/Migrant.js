import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';
import Address from './Address.js';

const Migrant = sequelize.define(
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
      allowNull: false,
      unique: true,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: true,
    },
    crnm: {
      type: DataTypes.STRING(9),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    registration_data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
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
    addresses_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: 'id',
      },
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
      type: DataTypes.DATE,
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
    timestamps: true,
  },
);

Migrant.belongsTo(Address, { foreignKey: 'addresses_id' });

Address.hasMany(Migrant, { foreignKey: 'addresses_id' });

export default Migrant;
