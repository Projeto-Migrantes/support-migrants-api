import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import UserIR from './UserIR.js';
import Address from './Address.js';
import MigrantDocument from './MigrantDocument.js';

// Define an migrant template for the database
const Migrant = connection.define('Migrant', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      full_name: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      social_name: {
        type: DataTypes.STRING(150),
        allowNull: true
      },
      date_birth: {
        type: DataTypes.DATE,
        allowNull: false
      },
      preferred_language: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      entry_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      address_complement: {
        type: DataTypes.STRING(120),
        allowNull: true
      },
      address_number: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      phone_whatsapp: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      authorized: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      migrant_reason: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      nationality: {
        type: DataTypes.STRING(120),
        allowNull: false
      },
      marital_status: {
        type: DataTypes.STRING(120),
        allowNull: false
      },
      education_level: {
        type: DataTypes.STRING(120),
        allowNull: true
      },
      social_program_access: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      status_migratory: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
     is_pcd: {
        type: DataTypes.BOOLEAN,
        allowNull: false
     }
}, {
    tableName: 'migrants',
}); 

// Migrant has a international relations user
Migrant.belongsTo(UserIR, { foreignKey: 'user_ir_id' });

// international relations user has many Users
UserIR.hasMany(Migrant, { foreignKey: 'user_ir_id' });

// Migrant has one Document Migrant
Migrant.hasOne(MigrantDocument, { foreignKey: 'migrant_document_id' });

// Document Migrant belongs to Migrant
MigrantDocument.belongsTo(Migrant, { foreignKey: 'migrant_document_id' });

// Migrant has an address
Migrant.belongsTo(Address, { foreignKey: 'address_id' }); 

// Address has many Migrants 
Address.hasMany(Migrant, { foreignKey: 'address_id' }); 

export default Migrant;
