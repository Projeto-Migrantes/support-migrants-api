import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM institutions_descriptions`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more institution descriptions. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('institutions_descriptions', [
    {
      institution_id: 1,
      institution_description_pt:
        'Oferece suporte completo desde acolhimento até orientação jurídica.',
      institution_description_en:
        'Provides full support from shelter to legal advice.',
      institution_description_es:
        'Ofrece apoyo completo desde acogida hasta asesoría legal.',
      institution_description_fr:
        "Fournit un soutien complet de l'accueil aux conseils juridiques.",
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 2,
      institution_description_pt:
        'Centro de acolhimento e orientação para processos de naturalização.',
      institution_description_en:
        'Center for shelter and naturalization guidance.',
      institution_description_es:
        'Centro de acogida y orientación de naturalización.',
      institution_description_fr:
        "Centre d'accueil et d'orientation à la naturalisation.",
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 3,
      institution_description_pt:
        'Realiza eventos culturais e oficinas de capacitação.',
      institution_description_en:
        'Hosts cultural events and training workshops.',
      institution_description_es:
        'Organiza eventos culturales y talleres de capacitación.',
      institution_description_fr:
        'Organise des événements culturels et des ateliers de formation.',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 4,
      institution_description_pt:
        'Oferece cursos técnicos e acompanhamento profissional.',
      institution_description_en:
        'Offers technical courses and professional mentoring.',
      institution_description_es:
        'Ofrece cursos técnicos y mentoría profesional.',
      institution_description_fr:
        'Propose des cours techniques et du mentorat professionnel.',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 5,
      institution_description_pt: 'Apoio psicossocial e reunificação familiar.',
      institution_description_en:
        'Psychosocial support and family reunification.',
      institution_description_es: 'Apoyo psicosocial y reunificación familiar.',
      institution_description_fr:
        'Soutien psychosocial et réunification familiale.',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('institutions_descriptions', null, {});
};
