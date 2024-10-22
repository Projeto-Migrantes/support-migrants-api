import Category from "../src/models/Category.js";
import Institution from "../src/models/Institution.js";
import Address from "../src/models/Address.js";
import TargetPopulation from "../src/models/TargetPopulation.js";
import InstitutionDescription from "../src/models/InstitutionDescriptions.js";
import RequirementsRestriction from "../src/models/RequirementRestriction.js";
import ResponsibleUser from "../src/models/ResponsibleUser.js";
import ServiceCost from "../src/models/ServiceCost.js"; // Modelo para custos de serviços
import ServiceHours from "../src/models/ServiceHours.js"; // Modelo para horários de serviços
import ServicesOffered from "../src/models/ServicesOffered.js"; // Modelo para serviços oferecidos

const runSeeders = async () => {
    try {
        // Seed Categories
        const categories = await Category.bulkCreate([
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
        ]);

        // Seed Address
        const createdAddress = await Address.create({
            cep: "40060-000",
            city: "Salvador",
            state: "Bahia",
            neighborhood: "Centro",
            street: "Avenida Sete de Setembro"
        });
        
        // Seed Responsible User
        const createdResponsibleUser = await ResponsibleUser.create({
            name: "João da Silva",
            position: "Diretor",
            sector: "TI",
            role: "Gerente de Projetos"
        });

        // Seed Institution
        const createdInstitution = await Institution.create({
            name: "Instituto de Tecnologia Exemplar",
            cnpj: "12.345.678/0001-90",
            email: "contato@institutoexemplar.com.br",
            main_phone: "(71) 98765-4321",
            secondary_phone: "(71) 99876-5432",
            address_complement: "Bloco B, Sala 203",
            address_number: "500",
            site: "https://www.institutoexemplar.com.br",
            instagram: "@institutoexemplar",
            authorized: true,
            main_language: "Portuguese",
            second_language: "English",
            link_maps: "https://goo.gl/maps/exemploinstituto",
            category_id: categories[9].id, 
            address_id: createdAddress.id,
            responsible_user_id: createdResponsibleUser.id,
        });

        // Seed Institution Descriptions
        await InstitutionDescription.create({
            description_pt: "Descrição da instituição em português",
            description_fr: "Description de l'institution en français",
            description_es: "Descripción de la institución en español",
            description_en: "Institution description in English",
            institution_id: createdInstitution.id
        });

        // Seed Requirements Restrictions
        await RequirementsRestriction.create({
            requirements_restrictions_pt: "Requisitos e restrições em português",
            requirements_restrictions_fr: "Exigences et restrictions en français",
            requirements_restrictions_es: "Requisitos y restricciones en español",
            requirements_restrictions_en: "Requirements and restrictions in English",
            institution_id: createdInstitution.id
        });


        // Seed Service Cost
        await ServiceCost.create({
            services_costs_pt: "Custos dos serviços em português",
            services_costs_fr: "Coûts des services en français",
            services_costs_es: "Costos de los servicios en español",
            services_costs_en: "Service costs in English",
            institution_id: createdInstitution.id
        });

        // Seed Service Hours
        await ServiceHours.create({
            service_hours_pt: "Horários de atendimento em português",
            service_hours_fr: "Heures de service en français",
            service_hours_es: "Horas de servicio en español",
            service_hours_en: "Service hours in English",
            institution_id: createdInstitution.id
        });

        // Seed Services Offered
        await ServicesOffered.create({
            services_offered_pt: "Serviços oferecidos em português",
            services_offered_fr: "Services offerts en français",
            services_offered_es: "Servicios ofrecidos en español",
            services_offered_en: "Services offered in English",
            institution_id: createdInstitution.id
        });

        // Seed Target Population
        await TargetPopulation.create({
            target_populations_pt: "População-alvo em português",
            target_populations_fr: "Population cible en français",
            target_populations_es: "Población objetivo en español",
            target_populations_en: "Target population in English",
            institution_id: createdInstitution.id
        });

        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error while seeding data:", error);
    }
};

// Execute the seeder
export default runSeeders;
