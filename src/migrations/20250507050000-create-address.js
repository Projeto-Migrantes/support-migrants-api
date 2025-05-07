export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('addresses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    postal_code: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    street: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    neighborhood: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING(50),
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
  await queryInterface.dropTable('addresses');
};
