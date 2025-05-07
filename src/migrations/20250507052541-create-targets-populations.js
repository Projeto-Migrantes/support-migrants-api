export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('targets_populations', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    target_populations_pt: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    target_populations_fr: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    target_populations_es: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    target_populations_en: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    institutions_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'institutions',
        key: 'id',
      },
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
  await queryInterface.dropTable('targets_populations');
};
