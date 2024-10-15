import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Define an nationality template for the database
const Nationality = connection.define('nationality', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      description: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
},{
    tableName: 'nationality',
    timestamps: false,
});

export default Nationality;