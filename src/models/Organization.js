import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import Address from './Address.js';
import Category from './Category.js';

// Define an organization template for the database
const Organization = connection.define('organization', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      company_name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      trade_name: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      cnpj: {
        type: DataTypes.STRING(20),
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
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description_pt: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      description_en: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      description_fr: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      description_es: {
        type: DataTypes.STRING(255),
        allowNull: false
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
      site: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
}, {
    tableName: 'organization',
}); 

// Organization has a address
Organization.belongsTo(Address, { foreignKey: 'address_id' });

// Address has many organizations
Address.hasMany(Organization, { foreignKey: 'address_id' });

// Organization has a category
Organization.belongsTo(Category, { foreignKey: 'category_id' });

// Category has many organizations
Category.hasMany(Organization, { foreignKey: 'category_id' });

export default Organization;