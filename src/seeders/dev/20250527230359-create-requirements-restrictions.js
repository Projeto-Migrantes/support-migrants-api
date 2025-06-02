import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM requirements_restrictions`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more services offered. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('requirements_restrictions', [
    {
      institution_id: 1,
      requirements_restrictions_pt: 'Documento de identidade com foto',
      requirements_restrictions_en: 'Photo ID document',
      requirements_restrictions_es: 'Documento de identidad con foto',
      requirements_restrictions_fr: "Pièce d'identité avec photo",
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 2,
      requirements_restrictions_pt: 'Registro prévio no sistema',
      requirements_restrictions_en: 'Prior registration in the system',
      requirements_restrictions_es: 'Registro previo en el sistema',
      requirements_restrictions_fr: 'Enregistrement préalable dans le système',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 3,
      requirements_restrictions_pt: 'Inscrição prévia online',
      requirements_restrictions_en: 'Online pre-registration',
      requirements_restrictions_es: 'Inscripción previa en línea',
      requirements_restrictions_fr: 'Pré-inscription en ligne',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 4,
      requirements_restrictions_pt: 'Comprovante de escolaridade',
      requirements_restrictions_en: 'Proof of education',
      requirements_restrictions_es: 'Comprobante de escolaridad',
      requirements_restrictions_fr: 'Justificatif de scolarité',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 5,
      requirements_restrictions_pt: 'Entrevista agendada',
      requirements_restrictions_en: 'Scheduled interview',
      requirements_restrictions_es: 'Entrevista programada',
      requirements_restrictions_fr: 'Entretien planifié',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('requirements_restrictions', null, {});
};
