import Category from "./models/Category.js";
import Institution from "./models/Institution.js";
import Address from "./models/Address.js";
import TargetPopulation from "./models/TargetPopulation.js";

const runSeeders = async () => {
    try {
        // Contagem de registros existentes
        const addressCount = await Address.count();
        const categoryCount = await Category.count();
        const institutionCount = await Institution.count();
        const targetPopulationCount = await TargetPopulation.count();

        if (targetPopulationCount === 0) {
            await TargetPopulation.bulkCreate([
                {
                    target_populations_pt: 'Migrantes',
                    target_populations_fr: 'Migrants',
                    target_populations_es: 'Migrantes',
                    target_populations_en: 'Migrants',
                },
                {
                    target_populations_pt: 'Refugiados',
                    target_populations_fr: 'Réfugiés',
                    target_populations_es: 'Refugiados',
                    target_populations_en: 'Refugees',

                },
                {
                    target_populations_pt: 'Vítimas de Tráfico de Pessoas',
                    target_populations_fr: 'Victimes de la traite des personnes',
                    target_populations_es: 'Víctimas de la trata de personas',
                    target_populations_en: 'Victims of human trafficking',
                },
                {
                    target_populations_pt: 'Trabalhadores',
                    target_populations_fr: 'Travailleurs',
                    target_populations_es: 'Trabajadores',
                    target_populations_en: 'Workers',

                },
                {
                    target_populations_pt: 'População Indígena',
                    target_populations_fr: 'Population indigène',
                    target_populations_es: 'Población indígena',
                    target_populations_en: 'Indigenous population',
                }
            ]);
        }

        // Inserção de endereços se a tabela estiver vazia
        if (addressCount === 0) {
            await Address.bulkCreate([
            ]);
        }



        // Inserção de categorias se a tabela estiver vazia
        if (categoryCount === 0) {
            await Category.bulkCreate([
                {
                    category_pt: "Agência Governamental",
                    category_fr: "Agence gouvernementale",
                    category_es: "Agencia Gubernamental",
                    category_en: "Government Agency"
                },
                {
                    category_pt: "Delegacia de Migração",
                    category_fr: "Délégation de migration",
                    category_es: "Delegación de migración",
                    category_en: "Migration Delegation"
                },
                {
                    category_pt: "Polícia Federal",
                    category_fr: "Police fédérale",
                    category_es: "Policía federal",
                    category_en: "Federal Police"
                },
                {
                    category_pt: "Centro de Atenção",
                    category_fr: "Centre d'attention",
                    category_es: "Centro de Atención",
                    category_en: "Attention Center"
                },
                {
                    category_pt: "Centro de Integração",
                    category_fr: "Centre d'intégration",
                    category_es: "Centro de Integración",
                    category_en: "Integration Center"
                },
                {
                    category_pt: "Centro de Referência",
                    category_fr: "Centre de référence",
                    category_es: "Centro de Referencia",
                    category_en: "Reference Center"
                },
                {
                    category_pt: "Centro de Assistência Social",
                    category_fr: "Centre d'assistance sociale",
                    category_es: "Centro de Asistencia Social",
                    category_en: "Social Assistance Center"
                },
                {
                    category_pt: "Sociedade Civil Organizada",
                    category_fr: "Société civile organisée",
                    category_es: "Sociedad Civil Organizada",
                    category_en: "Organized Civil Society"
                },
                {
                    category_pt: "Organização Internacional",
                    category_fr: "Organisation internationale",
                    category_es: "Organización Internacional",
                    category_en: "International Organization"
                },
                {
                    category_pt: "Instituição Religiosa",
                    category_fr: "Institution religieuse",
                    category_es: "Institución Religiosa",
                    category_en: "Religious Institution"
                },
                {
                    category_pt: "Instituição de Ensino",
                    category_fr: "Établissement d'enseignement",
                    category_es: "Institución Educativa",
                    category_en: "Educational Institution"
                },
                {
                    category_pt: "Procuradoria",
                    category_fr: "Procureur",
                    category_es: "Procuraduría",
                    category_en: "Prosecutor's Office"
                },
                {
                    category_pt: "Defensoria Pública",
                    category_fr: "Défense publique",
                    category_es: "Defensoría pública",
                    category_en: "Public Defender's Office"
                },
                {
                    category_pt: "Tradutores Juramentados",
                    category_fr: "Traducteurs assermentés",
                    category_es: "Traductores Juramentados",
                    category_en: "Sworn Translators"
                },
                {
                    category_pt: "Outras",
                    category_fr: "Autres",
                    category_es: "Otras",
                    category_en: "Others"
                }
            ]
            );
        }

        if (institutionCount == 0) {
            await Institution.bulkCreate([]);
        }
    } catch (error) {
        console.error("Error while seeding data:", error);
    }
};

// Execute the seeder
export default runSeeders;
