import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';
import Address from './Address.js';
import Category from './Category.js';
import ResponsibleUser from './ResponsibleUser.js';
import InstitutionDescriptions from './InstitutionDescriptions.js';
import ServiceHours from '../models/ServiceHours.js';
import TargetPopulation from './TargetPopulation.js';
import RequirementRestriction from './RequirementRestriction.js';
import ServicesOfferred from './ServicesOffered.js';
import ServiceCosts from './ServiceCost.js';

const Institution = connection.define(
  'Institution',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    main_phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    secondary_phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: true,
    },
    address_complement: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address_number: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    registration_data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    consent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    instagram: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    link_maps: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: 'institutions',
    timestamps: false,
  },
);

Institution.belongsTo(Category, { foreignKey: 'category_id' });

Category.hasMany(Institution, { foreignKey: 'category_id' });

Institution.belongsTo(Address, { foreignKey: 'address_id' });

Address.hasMany(Institution, { foreignKey: 'address_id' });

Institution.belongsTo(ResponsibleUser, { foreignKey: 'responsible_user_id' });

ResponsibleUser.hasMany(Institution, { foreignKey: 'responsible_user_id' });

InstitutionDescriptions.belongsTo(Institution, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

Institution.hasOne(InstitutionDescriptions, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

ServiceHours.belongsTo(Institution, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

Institution.hasOne(ServiceHours, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

TargetPopulation.belongsTo(Institution, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

Institution.hasOne(TargetPopulation, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

RequirementRestriction.belongsTo(Institution, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

Institution.hasOne(RequirementRestriction, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

ServicesOfferred.belongsTo(Institution, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

Institution.hasOne(ServicesOfferred, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

ServiceCosts.belongsTo(Institution, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

Institution.hasOne(ServiceCosts, {
  foreignKey: 'institution_id',
  onDelete: 'CASCADE',
});

export default Institution;
