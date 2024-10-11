import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

// Definir um modelo para o DB
const Categoria = connection.define('categoria', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
}, {
    tableName: 'categoria',
});

export default Categoria;