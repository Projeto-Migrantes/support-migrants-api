import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an marital status template for the database
const MaritalStatus = connection.define('marital_status', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    description: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    tableName: 'marital_status',
});

export default MaritalStatus;
