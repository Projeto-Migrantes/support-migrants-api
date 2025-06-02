export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('terms_conditions', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    term_condition_pt: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    term_condition_fr: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    term_condition_es: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    term_condition_en: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM('migrant', 'institution'),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('terms_conditions');
};
