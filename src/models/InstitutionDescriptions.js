import { DataTypes } from "sequelize";
import connection from "../config/database.js";

// Define an Institution Description template for the database
const InstitutionDescriptions = connection.define('InstitutionDescriptions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    description_pt: {
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
   description_en: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'institutions_descriptions',
    timestamps: false,
});

export default InstitutionDescriptions;