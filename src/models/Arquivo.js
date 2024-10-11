import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import UsuarioRI from './UsuarioRI.js';

// Definir um modelo para o DB
const Arquivo = connection.define('arquivo', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      titulo: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
}, {
    tableName: 'arquivo',
});

// Arquivo possui um usuário
Arquivo.belongsTo(UsuarioRI, { foreignKey: 'usuario_ri_id' });

// Usuario possue vários arquivos
UsuarioRI.hasMany(Arquivo, { foreignKey: 'usuario_ri_id' });

export default Arquivo;
