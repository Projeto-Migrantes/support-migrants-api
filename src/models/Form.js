import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import Migrant from './Migrant.js';

// Define an form template for the database
const Form = connection.define('form', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      subject: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      message: {
        type: DataTypes.STRING(700),
        allowNull: false
      },
      telephone: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
}, {
    tableName: 'form',
});

// Form has a migrant
Form.belongsTo(Migrant, { foreignKey: 'migrant_id' });

// Migrant has many forms
Migrant.hasMany(Form, { foreignKey: 'migrant_id' });

export default Form;