import Category from "../src/models/Category.js";
import Institution from "../src/models/Institution.js";
import Address from "../src/models/Address.js";
import TargetPopulation from "../src/models/TargetPopulation.js";
import InstitutionDescription from "../src/models/InstitutionDescriptions.js";
import RequirementsRestriction from "../src/models/RequirementRestriction.js";
import ResponsibleUser from "../src/models/ResponsibleUser.js";
import ServiceCost from "../src/models/ServiceCost.js"; 
import ServiceHours from "../src/models/ServiceHours.js"; 
import ServicesOffered from "../src/models/ServicesOffered.js"; 
import Pdf from "./models/Pdf.js";
import Term from "./models/Term.js"
import MigrantDocument from "./models/MigrantDocument.js";
import Migrant from "./models/Migrant.js";
import hashPasswordUtil from "./utils/hashPasswordUtil.js" 
import User from "./models/User.js"
import Form from "./models/Form.js"
import { hash } from "bcrypt";

const runSeeders = async () => {
    try {

        await Form.bulkCreate([
            { email: "alex.oliveira@exemplo.com", message: "Este formulário é para testes. Por favor, não delete.", name: "Alex Oliveira", phone: "71998019014", subject: "NÃO DELETE ESSE FORMULÁRIO" },
        ])

        await Address.create({
            cep: "40060-000",
            city: "Salvador",
            state: "Bahia",
            neighborhood: "Centro",
            street: "Avenida Sete de Setembro"
        });

        // Seed PDF data
        await Pdf.bulkCreate([
            {
                name: "Manual do Migrante em Português",
                description: "Este PDF é um manual para o migrante em Português",
                url: "https://drive.google.com/file/d/11S0GMCe3TLStG_OpVrAmfI1jLR27boIh/view?usp=sharing",
                language: "pt"
            },
            {
                name: "Migrant Handbook in English",
                description: "This PDF is a handbook for migrants in English.",
                url: "https://drive.google.com/file/d/1WNdYsyZUlwXnQACtl5PA5KUNUv5ROI7T/view?usp=sharing",
                language: "en"
            },
            {
                name: "Manual del Migrante en Español",
                description: "Este PDF es un manual para migrantes en Español.",
                url: "https://drive.google.com/file/d/1ur5LPuhLYP8Vf4kDFcx9drLi66D4p4Xj/view?usp=sharing",
                language: "es"
            },
            {
                name: "Manuel du migrant en Français",
                description: "Ce PDF est un manuel destiné aux migrants en Français.",
                url: "https://drive.google.com/file/d/1hE4XTmn_7gGd-MfxUKIzqItpBTd_WCLa/view?usp=sharing",
                language: "fr"
            }
        ]);

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
        ])

        await Migrant.bulkCreate([
            {
                full_name: "Maria Oliveira",
                social_name: "Alex Oliveira",
                date_birth: new Date('1985-03-22'),
                preferred_language: "Português",
                entry_date: new Date('2021-12-29'),
                address_complement: "Casa 2",
                address_number: "456",
                email: "alex.oliveira@example.com",
                phone: "(71)91234-5678",
                whatsapp_number: true,
                authorized: true,
                migrant_reason: "Estudo",
                gender: "Não-Binário",
                nationality: "Brasileiro",
                marital_status: "Casado",
                education_level: "Médio",
                status_migratory: "Regular",
                password: await hashPasswordUtil.createHash("senhaForte123"),
                is_pcd: false,
                address_id: 1,
              },
        ])

        await Term.create({
            content: 'Contéudo do term',
            type: 'migrante'
        });

        await Term.create({
            content: 'Contéudo do term',
            type: 'instituicao'
        });


        await User.bulkCreate([
            {
                name: "admin",
                email: "admin",
                password: await hashPasswordUtil.createHash("prof-Rafa!2024.painel"),
                role: "admin"
            },
            {
                name: "Alisson Oliveira Dev",
                email: "alisson.oliveira@rsfdev.com",
                password: await hashPasswordUtil.createHash("12166876"),
                role: "admin"
            }
        ])



        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error while seeding data:", error);
    }
};

// Execute the seeder
export default runSeeders;
