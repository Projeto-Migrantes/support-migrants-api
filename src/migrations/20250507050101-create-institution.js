export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('institutions', {
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
    cnpj: {
      type: Sequelize.STRING(18),
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    main_phone: {
      type: Sequelize.STRING(15),
      allowNull: false,
      unique: true,
    },
    secondary_phone: {
      type: Sequelize.STRING(15),
      allowNull: true,
      unique: true,
    },
    addresses_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'id',
      },
    },
    categories_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    address_complement: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    address_number: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    registration_data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    website: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    consent: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    purpose: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    instagram: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    link_maps: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    responsible_user_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    responsible_user_position: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    responsible_user_sector: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    responsible_user_role: {
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
  await queryInterface.dropTable('institutions');
};
