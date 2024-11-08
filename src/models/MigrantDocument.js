import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an Document Migrant template for the database
const MigrantDocument = connection.define('MigrantDocument', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      document_type: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      document_identification: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
}, {
    tableName: 'migrants_documents',
    timestamps: false,
});

export default MigrantDocument;