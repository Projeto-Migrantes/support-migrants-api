export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('services_costs', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    services_costs_pt: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    services_costs_fr: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    services_costs_en: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    services_costs_es: {
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
  await queryInterface.dropTable('services_costs');
};
