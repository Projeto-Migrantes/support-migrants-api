export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('administrators', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM('super_admin', 'admin'),
      allowNull: false,
      defaultValue: 'admin',
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
  await queryInterface.dropTable('administrators');
};
