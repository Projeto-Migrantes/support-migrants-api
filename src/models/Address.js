import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an address template for the database
const Address = connection.define('address', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      cep: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      neighborhood: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      street: {
        type: DataTypes.STRING(150),
        allowNull: false
      }
},{
    tableName: 'address',
});

export default Address;