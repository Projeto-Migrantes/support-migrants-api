export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('requirements_restrictions', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    requirements_restrictions_pt: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    requirements_restrictions_fr: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    requirements_restrictions_es: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    requirements_restrictions_en: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    institution_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'institutions',
        key: 'id',
      },
      onDelete: 'CASCADE',
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
  await queryInterface.dropTable('requirements_restrictions');
};
