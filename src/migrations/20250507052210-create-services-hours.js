export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('services_hours', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    service_hours_pt: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    service_hours_fr: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    service_hours_es: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    service_hours_en: {
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
  await queryInterface.dropTable('services_hours');
};
