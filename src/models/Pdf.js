import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an pdf template for the database
const Pdf = connection.define('Pdf', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: true 
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'pdfs',
});

export default Pdf;
