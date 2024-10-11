import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Definir um modelo para o DB
const Nacionalidade = connection.define('nacionalidade', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      descricao: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
},{
    tableName: 'nacionalidade',
});

export default Nacionalidade;