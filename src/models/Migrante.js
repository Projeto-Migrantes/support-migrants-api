import { DataTypes } from 'sequelize';
import connection from '../config/database.js';
import UsuarioRI from './UsuarioRI.js';
import EstadoCivil from './EstadoCivil.js';
import Nacionalidade from './Nacionalidade.js';

// Definir um modelo para o DB
const Migrante = connection.define('migrante', { 
      id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      identificacao: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: true
      },
      registro_migrante: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
      },
      data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
      },
      genero: {
        type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'),
        allowNull: false
      },
      profissao: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      senha: {
        type: DataTypes.STRING(12),
        allowNull: false
      },
      estado_civil_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      nacionalidade_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
}, {
    tableName: 'migrante',
}); 

// Migrante possue um Usuário RI
Migrante.belongsTo(UsuarioRI, { foreignKey: 'usuario_ri_id' });

// Usuário possue muitos Migrantes
UsuarioRI.hasMany(Migrante, { foreignKey: 'usuario_ri_id' });

//Migrante possue uma nacionalidade
Migrante.belongsTo(Nacionalidade, { foreignKey: 'nacionalidade_id' });

// Nacionalidade possue muitos Migrantes
Nacionalidade.hasMany(Migrante, { foreignKey: 'nacionalidade_id' });

// Migrante possue um estado civil
Migrante.belongsTo(EstadoCivil, { foreignKey: 'estado_civil_id' });

// Estado Civil possue muitos Migrantes
EstadoCivil.hasMany(Migrante, { foreignKey: 'estado_civil_id' });

export default Migrante;
