import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an address template for the database
const Address = connection.define('Address', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      cep: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      neighborhood: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      street: {
        type: DataTypes.STRING(300),
        allowNull: false
      }
},{
    tableName: 'address',
    timestamps: false,
});

export default Address;