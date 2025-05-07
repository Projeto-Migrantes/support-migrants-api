export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('categories', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    category_pt: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    category_fr: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    category_es: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    category_en: {
      type: Sequelize.STRING(255),
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
  await queryInterface.dropTable('categories');
};
