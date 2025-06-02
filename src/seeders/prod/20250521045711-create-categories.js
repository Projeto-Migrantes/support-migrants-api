import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM categories`,
  );

  if (parseInt(results[0].total) >= 1) {
    logger.warn('Categories already exist. No entries have been made.');
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('categories', [
    {
      category_pt: 'Todas Categorias',
      category_fr: 'Toutes les Catégories',
      category_es: 'Todas las Categorías',
      category_en: 'All Categories',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Agência Governamental',
      category_fr: 'Agence gouvernementale',
      category_es: 'Agencia Gubernamental',
      category_en: 'Government Agency',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Delegacia de Migração',
      category_fr: 'Délégation de migration',
      category_es: 'Delegación de migración',
      category_en: 'Migration Delegation',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Polícia Federal',
      category_fr: 'Police fédérale',
      category_es: 'Policía federal',
      category_en: 'Federal Police',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Centro de Atenção',
      category_fr: "Centre d'attention",
      category_es: 'Centro de Atención',
      category_en: 'Attention Center',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Centro de Integração',
      category_fr: "Centre d'intégration",
      category_es: 'Centro de Integración',
      category_en: 'Integration Center',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Centro de Referência',
      category_fr: 'Centre de référence',
      category_es: 'Centro de Referencia',
      category_en: 'Reference Center',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Centro de Assistência Social',
      category_fr: "Centre d'assistance sociale",
      category_es: 'Centro de Asistencia Social',
      category_en: 'Social Assistance Center',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Sociedade Civil Organizada',
      category_fr: 'Société civile organisée',
      category_es: 'Sociedad Civil Organizada',
      category_en: 'Organized Civil Society',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Organização Internacional',
      category_fr: 'Organisation internationale',
      category_es: 'Organización Internacional',
      category_en: 'International Organization',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Instituição Religiosa',
      category_fr: 'Institution religieuse',
      category_es: 'Institución Religiosa',
      category_en: 'Religious Institution',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Instituição de Ensino',
      category_fr: "Établissement d'enseignement",
      category_es: 'Institución Educativa',
      category_en: 'Educational Institution',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Procuradoria',
      category_fr: 'Procureur',
      category_es: 'Procuraduría',
      category_en: "Prosecutor's Office",
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Defensoria Pública',
      category_fr: 'Défense publique',
      category_es: 'Defensoría pública',
      category_en: "Public Defender's Office",
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Tradutores Juramentados',
      category_fr: 'Traducteurs assermentés',
      category_es: 'Traductores Juramentados',
      category_en: 'Sworn Translators',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Outras',
      category_fr: 'Autres',
      category_es: 'Otras',
      category_en: 'Others',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('categories', null, {});
};
