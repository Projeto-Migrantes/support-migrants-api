import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import UserIR from './UserIR.js';
import MaritalStatus from './MaritalStatus.js';
import Nationality from './Nationality.js';

// Define an migrant template for the database
const Migrant = connection.define('migrant', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      passport: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: true
      },
      migrant_registration: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
      },
      gender: {
        type: DataTypes.ENUM('Male', 'Female', 'Other'),
        allowNull: false
      },
      profession: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      password  : {
        type: DataTypes.STRING(120),
        allowNull: false
      },
      marital_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      nationality_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
}, {
    tableName: 'migrant',
}); 

// Migrant has a international relations user
Migrant.belongsTo(UserIR, { foreignKey: 'user_ir_id' });

// international relations user has many Users
UserIR.hasMany(Migrant, { foreignKey: 'user_ir_id' });

// Migrant has a nationality
Migrant.belongsTo(Nationality, { foreignKey: 'nationality_id' });

// Nationality has many migrants
Nationality.hasMany(Migrant, { foreignKey: 'nationality_id' });

// Migrant has a marital status
Migrant.belongsTo(MaritalStatus, { foreignKey: 'marital_status_id' });

// Marital status has many migrants
MaritalStatus.hasMany(Migrant, { foreignKey: 'marital_status_id' });

export default Migrant;
