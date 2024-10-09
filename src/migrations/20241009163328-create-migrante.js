'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('migrante', { 
      id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, 
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      identificacao: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: true
      },
      registro_migrante: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      genero: {
        type: Sequelize.ENUM('Masculino', 'Feminino', 'Outro'),
        allowNull: false
      },
      profissao: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      hash_senha: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      estado_civil_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nacionalidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      usuario_ri_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },


    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('migrante');
  }
};
