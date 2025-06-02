import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM migrant_manuals`,
  );

  if (parseInt(results[0].total) >= 4) {
    logger.warn(
      'There are already 4 or more migrant manuals. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('migrant_manuals', [
    {
      name: 'Manual del Migrante en Español',
      description: 'Este PDF es un manual para migrantes en Español..',
      url: 'https://drive.google.com/file/d/1ur5LPuhLYP8Vf4kDFcx9drLi66D4p4Xj/view?usp=sharing',
      language: 'es',
      updated_at: now,
      created_at: now,
    },
    {
      name: 'Migrant Handbook in English',
      description: 'This PDF is a handbook for migrants in English.',
      url: 'https://drive.google.com/file/d/1WNdYsyZUlwXnQACtl5PA5KUNUv5ROI7T/view?usp=sharing',
      language: 'en',
      updated_at: now,
      created_at: now,
    },
    {
      name: 'Manual do Migrante em Português',
      description: 'Este PDF é um manual para o migrante em Português',
      url: 'https://drive.google.com/file/d/11S0GMCe3TLStG_OpVrAmfI1jLR27boIh/view?usp=sharing',
      language: 'pt',
      updated_at: now,
      created_at: now,
    },
    {
      name: 'Manuel du migrant en Français',
      description: 'Ce PDF est un manuel destiné aux migrants en Français.',
      url: 'https://drive.google.com/file/d/1hE4XTmn_7gGd-MfxUKIzqItpBTd_WCLa/view?usp=sharing',
      language: 'fr',
      updated_at: now,
      created_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('migrant_manuals', null, {});
};
