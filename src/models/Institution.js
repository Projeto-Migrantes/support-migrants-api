import { DataTypes } from 'sequelize';
import connection from '../config/database.config.js';
import Address from './Address.js';
import Category from './Category.js';
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
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Category,
        key: 'id',
      },
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
    responsible_user_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    responsible_user_position: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    responsible_user_sector: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    responsible_user_role: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'institutions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Institution.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Category.hasMany(Institution, {
  foreignKey: 'category_id',
  as: 'institutions',
});

Institution.belongsTo(Address, { foreignKey: 'address_id', as: 'address' });
Address.hasMany(Institution, { foreignKey: 'address_id', as: 'institutions' });

Institution.hasOne(InstitutionDescriptions, {
  foreignKey: 'institution_id',
  as: 'institution_descriptions',
  onDelete: 'CASCADE',
});

InstitutionDescriptions.belongsTo(Institution, {
  foreignKey: 'institution_id',
  as: 'institution',
  onDelete: 'CASCADE',
});

Institution.hasOne(ServiceHours, {
  foreignKey: 'institution_id',
  as: 'service_hours',
  onDelete: 'CASCADE',
});
ServiceHours.belongsTo(Institution, {
  foreignKey: 'institution_id',
  as: 'institution',
  onDelete: 'CASCADE',
});

Institution.hasOne(TargetPopulation, {
  foreignKey: 'institution_id',
  as: 'target_populations',
  onDelete: 'CASCADE',
});
TargetPopulation.belongsTo(Institution, {
  foreignKey: 'institution_id',
  as: 'institution',
  onDelete: 'CASCADE',
});

Institution.hasOne(RequirementRestriction, {
  foreignKey: 'institution_id',
  as: 'requirement_restriction',
  onDelete: 'CASCADE',
});
RequirementRestriction.belongsTo(Institution, {
  foreignKey: 'institution_id',
  as: 'institution',
  onDelete: 'CASCADE',
});

Institution.hasOne(ServicesOfferred, {
  foreignKey: 'institution_id',
  as: 'services_offered',
  onDelete: 'CASCADE',
});
ServicesOfferred.belongsTo(Institution, {
  foreignKey: 'institution_id',
  as: 'institution',
  onDelete: 'CASCADE',
});

Institution.hasOne(ServiceCosts, {
  foreignKey: 'institution_id',
  as: 'service_cost',
  onDelete: 'CASCADE',
});
ServiceCosts.belongsTo(Institution, {
  foreignKey: 'institution_id',
  as: 'institution',
  onDelete: 'CASCADE',
});

export default Institution;
