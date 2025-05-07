export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('migrants', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    date_of_birth: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING(15),
      allowNull: true,
      unique: true,
    },
    crnm: {
      type: Sequelize.STRING(9),
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    registration_data: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    consent: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    purpose: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    addresses_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'addresses',
        key: 'id',
      },
    },
    address_complement: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    address_number: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    social_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    language_preference: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    entry_into_brazil: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    migration_reason: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    country_of_origin: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    gender: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    marital_status: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    literacy_level: {
      type: Sequelize.STRING(50),
      allowNull: true,
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
  await queryInterface.dropTable('migrants');
};
