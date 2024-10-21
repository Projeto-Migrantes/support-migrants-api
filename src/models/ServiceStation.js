import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import Address from './Address.js';

// Define an service station template for the database
const serviceStation = connection.define('ServiceStation', {
  id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }, 
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true
  },
  main_phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true
  },
  secondary_phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
    unique: true
  },
  instagram: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  number_address: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  address_complement: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
}, {
    tableName: 'service_stations',
    timestamps: false,
});

// Service station has a address
serviceStation.belongsTo(Address, { foreignKey: 'address_id' });

// Address has many service stations
Address.hasMany(serviceStation, { foreignKey: 'address_id' });

export default serviceStation;