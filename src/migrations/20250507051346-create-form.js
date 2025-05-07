export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('forms', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    subject: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    message: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('resolved', 'read', 'unread'),
      allowNull: false,
      defaultValue: 'unread',
    },
    migrants_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'migrants',
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
  await queryInterface.dropTable('forms');
};
