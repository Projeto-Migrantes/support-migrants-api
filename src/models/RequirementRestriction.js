import { DataTypes } from "sequelize";
import connection from "../config/database.js";

// Define a Requirement and Restriction template for the database
const RequirementRestriction = connection.define('RequirementRestriction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    requirements_restrictions_pt: {
        type: DataTypes.STRING(255),
        allowNull: false
    }, 
    requirements_restrictions_fr: {
        type: DataTypes.STRING(255),
        allowNull: false
    }, 
    requirements_restrictions_es: {
        type: DataTypes.STRING(255),
        allowNull: false
    }, 
    requirements_restrictions_en: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'requirements_restrictions',
    timestamps: false,
});

export default RequirementRestriction;