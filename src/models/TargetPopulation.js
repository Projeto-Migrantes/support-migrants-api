import { DataTypes } from "sequelize";
import connection from "../config/database.js";

// Define a Target Population model for the database
const TargetPopulation = connection.define('TargetPopulation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    target_populations_pt: {
        type: DataTypes.STRING(255),
        allowNull: false
    }, 
    target_populations_fr: {
        type: DataTypes.STRING(255),
        allowNull: false
    }, 
    target_populations_es: {
        type: DataTypes.STRING(255),
        allowNull: false
    }, 
    target_populations_en: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},
{
    tableName: 'targets_populations',
    timestamps: false,
});

export default TargetPopulation;