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
      name: 'Manual de Usuario',
      description: 'Guía completa para el uso del producto.',
      url: 'https://example.com/manual_es.pdf',
      language: 'es',
      updated_at: now,
      created_at: now,
    },
    {
      name: 'User Manual',
      description: 'Comprehensive guide for product usage.',
      url: 'https://example.com/manual_en.pdf',
      language: 'en',
      updated_at: now,
      created_at: now,
    },
    {
      name: 'Manual do Usuário',
      description: 'Guia completo para uso do produto.',
      url: 'https://example.com/manual_pt.pdf',
      language: 'pt',
      updated_at: now,
      created_at: now,
    },
    {
      name: "Manuel de l'Utilisateur",
      description: "Guide complet pour l'utilisation du produit.",
      url: 'https://example.com/manual_fr.pdf',
      language: 'fr',
      updated_at: now,
      created_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('migrant_manuals', null, {});
};
