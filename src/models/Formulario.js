import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import Migrante from './Migrante.js';

// Definir um modelo para o DB
const Formulario = connection.define('formulario', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      assunto: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      mensagem: {
        type: DataTypes.STRING(700),
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
}, {
    tableName: 'formulario',
});

// Formulário possue um Migrante
Formulario.belongsTo(Migrante, { foreignKey: 'migrante_id' });

// Migrante possue vários formulários
Migrante.hasMany(Formulario, { foreignKey: 'migrante_id' });

export default Formulario;