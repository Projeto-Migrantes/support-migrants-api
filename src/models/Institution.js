import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import Address from './Address.js';
import Category from './Category.js';
import ResponsibleUser from './ResponsibleUser.js';
import InstitutionDescriptions from './InstitutionDescriptions.js';
import ServiceHours from '../models/ServiceHours.js';
import TargetPopulation from './TargetPopulation.js';
import RequirementRestriction from './RequirementRestriction.js';
import ServicesOfferred from './ServicesOffered.js';
import ServiceCosts from './ServiceCost.js';

// Define an institution template for the database
const Institution = connection.define('Institution', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      cnpj: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      main_phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      secondary_phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true
      },
      address_complement: {
        type: DataTypes.STRING(150),
        allowNull: true
      },
      address_number: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      site: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      instagram: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      authorized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      main_language: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      second_laguage: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      link_maps: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }
}, {
    tableName: 'institutions',
    timestamps: false,
}); 

// Institution has a category
Institution.belongsTo(Category, { foreignKey: 'categories_id' }); 

// Category has many Institutions
Category.hasMany(Institution, { foreignKey: 'categories_id' }); 

// Institution has an address
Institution.belongsTo(Address, { foreignKey: 'address_id' }); 

// Address has many Institutions 
Address.hasMany(Institution, { foreignKey: 'address_id' }); 

// Institution has a Responsible User
Institution.belongsTo(ResponsibleUser, { foreignKey: 'responsible_user_id' }); 

// Responsible User has many Institutions
ResponsibleUser.hasMany(Institution, { foreignKey: 'responsible_user_id' }); 

// Institution Descriptions belongs to Institution
InstitutionDescriptions.belongsTo(Institution, { foreignKey: 'institution_descriptions_id' }); 

// Institution has a Institution Descriptions
Institution.hasOne(InstitutionDescriptions, { foreignKey: 'institution_descriptions_id' }); 

// ServiceHours belongs to Institution
ServiceHours.belongsTo(Institution, { foreignKey: 'service_hours_id' }); 

// Institution has one ServiceHours
Institution.hasOne(ServiceHours, { foreignKey: 'service_hours_id' }); 

// TargetPopulation belongs to Institution
TargetPopulation.belongsTo(Institution, { foreignKey: 'target_population_id' }); 

// Institution has one TargetPopulation
Institution.hasOne(TargetPopulation, { foreignKey: 'target_population_id' }); 

// RequirementRestriction belongs to Institution
RequirementRestriction.belongsTo(Institution, { foreignKey: 'requirement_restriction_id' }); 

// Institution has one RequirementRestriction
Institution.hasOne(RequirementRestriction, { foreignKey: 'requirement_restriction_id' }); 

// ServicesOffered belongs to Institution
ServicesOfferred.belongsTo(Institution, { foreignKey: 'services_offerred_id' }); 

// Institution has one ServicesOffered
Institution.hasOne(ServicesOfferred, { foreignKey: 'services_offerred_id' });

// ServiceCosts belongs to Institution
ServiceCosts.belongsTo(Institution, { foreignKey: 'service_costs_id' }); 

// Institution has one ServiceCosts
Institution.hasOne(ServiceCosts, { foreignKey: 'service_costs_id' }); 

export default Institution;