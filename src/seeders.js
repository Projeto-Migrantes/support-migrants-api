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
import MigrantDocument from "./models/MigrantDocument.js";
import Migrant from "./models/Migrant.js";
import hashPasswordUtil from "./utils/hashPasswordUtil.js" 
import Term from "./models/Term.js";
import User from "./models/User.js";
import Form from "./models/Form.js";

const runSeeders = async () => {
    try {

         // Seed Address
         await Address.create({
            cep: "40060-000",
            city: "Salvador",
            state: "Bahia",
            neighborhood: "Centro",
            street: "Avenida Sete de Setembro"
        });

         await Address.create({
            cep: "40050-000",
            city: "Salvador",
            state: "Bahia",
            neighborhood: "Pelourinho",
            street: "Largo do Pelourinho"
        });
        
         await Address.create({
            cep: "40070-000",
            city: "Salvador",
            state: "Bahia",
            neighborhood: "Barra",
            street: "Avenida Oceânica"
        });
        
         await Address.create({
            cep: "40080-000",
            city: "Salvador",
            state: "Bahia",
            neighborhood: "Pituba",
            street: "Avenida Paulo VI"
        });
        
         await Address.create({
            cep: "40090-000",
            city: "Salvador",
            state: "Bahia",
            neighborhood: "Cabula",
            street: "Rua da Mangueira"
        });

        await Form.bulkCreate([
            { email: "alex.oliveira@exemplo.com", message: "Gostaria de saber mais detalhes sobre o serviço.", name: "Alex Oliveira", phone: "71983310134", subject: "Informação sobre serviço" },
            { email: "maria.silva@exemplo.com", message: "Estou interessada no orçamento.", name: "Maria Silva", phone: "71991234567", subject: "Orçamento" },
            { email: "joao.santos@exemplo.com", message: "Tenho dúvidas sobre o produto.", name: "João Santos", phone: "71987654321", subject: "Dúvidas sobre produto que acabei comprando essa semana na loja nova" },
            { email: "ana.moura@exemplo.com", message: "Solicito um orçamento detalhado.", name: "Ana Moura", phone: "71999887766", subject: "Orçamento" },
            { email: "bruno.lima@exemplo.com", message: "Preciso de informações sobre o atendimento.", name: "Bruno Lima", phone: "71988776655", subject: "Atendimento" },
            { email: "carla.oliveira@exemplo.com", message: "Gostaria de agendar um atendimento.", name: "Carla Oliveira", phone: "71977665544", subject: "Agendamento" },
            { email: "daniel.souza@exemplo.com", message: "Tenho uma reclamação a fazer.", name: "Daniel Souza", phone: "71966554433", subject: "Reclamação" },
            { email: "elisa.costa@exemplo.com", message: "Gostei muito do serviço!", name: "Elisa Costa", phone: "71955443322", subject: "Elogio" },
            { email: "fabio.pereira@exemplo.com", message: "Sugiro algumas melhorias no atendimento.", name: "Fabio Pereira", phone: "71944332211", subject: "Sugestão" },
            { email: "gloria.nunes@exemplo.com", message: "Preciso de informações sobre formas de pagamento.", name: "Gloria Nunes", phone: "71933221100", subject: "Pagamento" }
        ]);

        // Seed PDF data
        await Pdf.bulkCreate([
            {
                name: "Guia de Programação em JavaScript",
                description: "Este PDF contém um guia abrangente para iniciantes em JavaScript.",
                url: "https://drive.google.com/file/d/11S0GMCe3TLStG_OpVrAmfI1jLR27boIh/view?usp=sharing",
                language: "pt"
            },
            {
                name: "JavaScript Programming Guide",
                description: "This PDF contains a comprehensive guide for beginners in JavaScript.",
                url: "https://drive.google.com/file/d/1WNdYsyZUlwXnQACtl5PA5KUNUv5ROI7T/view?usp=sharing",
                language: "en"
            },
            {
                name: "Guía de Programación en JavaScript",
                description: "Este PDF contiene una guía completa para principiantes en JavaScript.",
                url: "https://drive.google.com/file/d/1ur5LPuhLYP8Vf4kDFcx9drLi66D4p4Xj/view?usp=sharing",
                language: "es"
            },
            {
                name: "Guide de Programmation en JavaScript",
                description: "Ce PDF contient un guide complet pour les débutants en JavaScript.",
                url: "https://drive.google.com/file/d/1hE4XTmn_7gGd-MfxUKIzqItpBTd_WCLa/view?usp=sharing",
                language: "fr"
            }
        ]);

        await Term.create({
            content: 'Contéudo do term',
            type: 'migrante'
        });

        await Term.create({
            content: 'Contéudo do term',
            type: 'instituicao'
        });

        await User.create({
            name: 'admin',
            email: "admin",
            password: await hashPasswordUtil.createHash("admin"),
            role: 'admin'
        });

        await User.create({
            name: 'Lucas Marques',
            email: "lucas.marques@gmail.com",
            password: await hashPasswordUtil.createHash("senha123"),
            role: 'user'
        });

        // Seed Categories
        const categories = await Category.bulkCreate([
            {
                category_pt: "Todas Categorias",
                category_fr: "Toutes les Catégories",
                category_es: "Todas las Categorías",
                category_en: "All Categories"
            },
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

        await Migrant.bulkCreate([
            {
              full_name: "João da Silva",
              date_birth: new Date('1990-01-15'),
              preferred_language: "Português",
              entry_date: new Date('2024-02-02'),
              address_complement: "Apartamento 101",
              address_number: "123",
              email: "joao.silva@example.com",
              phone: "(71)98765-4321",
              whatsapp_number: true,
              authorized: true,
              migrant_reason: "Trabalho",
              gender: "Masculino",
              nationality: "Brasileiro",
              marital_status: "Solteiro",
              education_level: "Superior",
              social_program_access: "Bolsa Família",
              status_migratory: "Regular",
              password: await hashPasswordUtil.createHash("senhaForte123"),
              is_pcd: false,
              address_id: 2,
            },
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
            {
              full_name: "Carlos Pereira",
              date_birth: new Date('1978-11-30'),
              preferred_language: "Francês",
              entry_date: new Date('2023-05-15'),
              address_number: "789",
              email: "carlos.pereira@example.com",
              phone: "(21)95555-5555",
              whatsapp_number: false,
              authorized: true,
              migrant_reason: "Refugiado",
              gender: "Masculino",
              nationality: "Venezuelano",
              marital_status: "Viúvo",
              education_level: "Superior",
              social_program_access: "Refúgio",
              status_migratory: "Regular",
              password: await hashPasswordUtil.createHash("senhaForte123"),
              is_pcd: false,
              address_id: 5,
            },
            {
              full_name: "Ana Costa",
              date_birth: new Date('2000-06-10'),
              preferred_language: "Espanhol",
              entry_date: new Date('2020-08-12'),
              address_number: "321",
              email: "ana.costa@example.com",
              phone: "(21)98888-8888",
              whatsapp_number: true,
              authorized: true,
              migrant_reason: "Estudo",
              gender: "Feminino",
              nationality: "Brasileira",
              marital_status: "Solteira",
              education_level: "Ensino Médio",
              status_migratory: "Regular",
              password: await hashPasswordUtil.createHash("senhaForte123"),
              is_pcd: false,
              address_id: 3,
            },
            {
              full_name: "Pedro Santos",
              social_name: "Maisa Santos",
              date_birth: new Date('1995-02-20'),
              preferred_language: "Inglês",
              entry_date: new Date('2024-10-28'),
              address_complement: "Cobertura",
              address_number: "654",
              email: "maisa.santos@example.com",
              phone: "(21)97777-7777",
              whatsapp_number: true,
              authorized: true,
              migrant_reason: "Trabalho",
              gender: "Feminino",
              nationality: "Brasileira",
              marital_status: "Solteira",
              education_level: "Superior",
              status_migratory: "Regular",
              password: await hashPasswordUtil.createHash("senhaForte123"),
              is_pcd: false,
              address_id: 1,
            }
          ]);


          await MigrantDocument.bulkCreate([
            {
              document_type: "Passaporte",
              document_identification: "AB123456",
              migrant_id: 1
            },
            {
              document_type: "Identidade",
              document_identification: "ID987654",
              migrant_id: 2
            },
            {
              document_type: "Visto",
              document_identification: "VISA111222",
              migrant_id: 3
            },
            {
              document_type: "Certidão de Nascimento",
              document_identification: "BIRTH333444",
              migrant_id: 4
            },
            {
              document_type: "CPF",
              document_identification: "CPF555666",
              migrant_id: 5
            }
          ]);

       
        
        // Seed Responsible User
         await ResponsibleUser.create({
            name: "João da Silva",
            position: "Diretor",
            sector: "TI",
            role: "Gerente de Projetos"
        });

         await ResponsibleUser.create({
            name: "Maria Oliveira",
            position: "Gerente",
            sector: "Financeiro",
            role: "Analista Financeiro"
        });
        
         await ResponsibleUser.create({
            name: "Carlos Santos",
            position: "Coordenador",
            sector: "Recursos Humanos",
            role: "Recrutador"
        });
        
         await ResponsibleUser.create({
            name: "Ana Pereira",
            position: "Supervisora",
            sector: "Marketing",
            role: "Especialista em Mídias Sociais"
        });
        
         await ResponsibleUser.create({
            name: "Fernando Costa",
            position: "Analista",
            sector: "Desenvolvimento",
            role: "Desenvolvedor Front-end"
        });

        // Seed Institution
        await Institution.create({
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
            category_id: 15, 
            address_id: 2,
            responsible_user_id: 1,
        });

        await Institution.create({
            name: "Instituto de Tecnologia Avançada",
            cnpj: "23.456.789/0001-01",
            email: "contato@institutoavancado.com.br",
            main_phone: "(71) 91234-5678",
            secondary_phone: "(71) 92345-6789",
            address_complement: "Bloco C, Sala 101",
            address_number: "250",
            site: "https://www.institutoavancado.com.br",
            instagram: "@institutoavancado",
            authorized: true,
            main_language: "Portuguese",
            second_language: "Spanish",
            link_maps: "https://goo.gl/maps/avancadoinstituto",
            category_id: 4, 
            address_id: 1,
            responsible_user_id: 2,
        });
        
        await Institution.create({
            name: "Centro de Inovação e Tecnologia",
            cnpj: "34.567.890/0001-12",
            email: "contato@centroinovacao.com.br",
            main_phone: "(71) 93456-7890",
            secondary_phone: "(71) 94567-8901",
            address_complement: "Prédio A, Sala 202",
            address_number: "750",
            site: "https://www.centroinovacao.com.br",
            instagram: "@centroinovacao",
            authorized: true,
            main_language: "Portuguese",
            second_language: "French",
            link_maps: "https://goo.gl/maps/inovacaocentro",
            category_id: 3, 
            address_id: 4,
            responsible_user_id: 3,
        });
        
        await Institution.create({
            name: "Faculdade de Ciências e Tecnologia",
            cnpj: "45.678.901/0001-23",
            email: "contato@faculdadect.com.br",
            main_phone: "(71) 95678-9012",
            secondary_phone: "(71) 96789-0123",
            address_complement: "Torre D, Andar 1",
            address_number: "150",
            site: "https://www.faculdadect.com.br",
            instagram: "@faculdadect",
            authorized: true,
            main_language: "Portuguese",
            second_language: "Italian",
            link_maps: "https://goo.gl/maps/faculdadect",
            category_id: 3, 
            address_id: 5,
            responsible_user_id: 4,
        });
        
        await Institution.create({
            name: "Universidade de Tecnologia e Pesquisa",
            cnpj: "56.789.012/0001-34",
            email: "contato@unitecp.com.br",
            main_phone: "(71) 97890-1234",
            secondary_phone: "(71) 98901-2345",
            address_complement: "Bloco E, Sala 105",
            address_number: "300",
            site: "https://www.unifacs.br",
            instagram: "@universidadesalvador",
            authorized: true,
            main_language: "Portuguese",
            second_language: "German",
            link_maps: "https://maps.app.goo.gl/oNcLfZZbGkHHF1vJ7",
            category_id: 2, 
            address_id: 1,
            responsible_user_id: 5,
        });

        // Seed Institution Descriptions
        await InstitutionDescription.create({
            description_pt: "Descrição da instituição em português 1",
            description_fr: "Description de l'institution en français 1",
            description_es: "Descripción de la institución en español 1",
            description_en: "Institution description in English 1",
            institution_id: 1
        });

        await InstitutionDescription.create({
            description_pt: "Descrição da instituição em português 2",
            description_fr: "Description de l'institution en français 2",
            description_es: "Descripción de la instituição em español 2",
            description_en: "Institution description in English 2",
            institution_id: 2
        });
        
        await InstitutionDescription.create({
            description_pt: "Descrição da instituição em português 3",
            description_fr: "Description de l'institution en français 3",
            description_es: "Descripción de la instituição en español 3",
            description_en: "Institution description in English 3",
            institution_id: 3
        });
        
        await InstitutionDescription.create({
            description_pt: "Descrição da instituição em português 4",
            description_fr: "Description de l'institution en français 4",
            description_es: "Descripción de la instituição em español 4",
            description_en: "Institution description in English 4",
            institution_id: 4
        });
        
        await InstitutionDescription.create({
            description_pt: "Descrição da instituição em português 5 Descrição da instituição em português 5 Descrição da instituição em português 5 Descrição da instituição em português 5 Descrição da instituição em português 5 Descrição da instituição em português 5 Descrição da instituição em português 5 ",
            description_fr: "Description de l'institution en français 5",
            description_es: "Descripción de la instituição em español 5",
            description_en: "Institution description in English 5",
            institution_id: 5
        });

        // Seed Requirements Restrictions
        await RequirementsRestriction.create({
            requirements_restrictions_pt: "Requisitos e restrições em português 1",
            requirements_restrictions_fr: "Exigences et restrictions en français 1",
            requirements_restrictions_es: "Requisitos y restricciones en español 1",
            requirements_restrictions_en: "Requirements and restrictions in English 1",
            institution_id: 1
        });

        await RequirementsRestriction.create({
            requirements_restrictions_pt: "Requisitos e restrições em português 2",
            requirements_restrictions_fr: "Exigences et restrictions en français 2",
            requirements_restrictions_es: "Requisitos y restricciones en español 2",
            requirements_restrictions_en: "Requirements and restrictions in English 2",
            institution_id: 2
        });
        
        await RequirementsRestriction.create({
            requirements_restrictions_pt: "Requisitos e restrições em português 3",
            requirements_restrictions_fr: "Exigences et restrictions en français 3",
            requirements_restrictions_es: "Requisitos y restricciones en español 3",
            requirements_restrictions_en: "Requirements and restrictions in English 3",
            institution_id: 3
        });
        
        await RequirementsRestriction.create({
            requirements_restrictions_pt: "Requisitos e restrições em português 4",
            requirements_restrictions_fr: "Exigences et restrictions en français 4",
            requirements_restrictions_es: "Requisitos y restricciones em español 4",
            requirements_restrictions_en: "Requirements and restrictions in English 4",
            institution_id: 4
        });
        
        await RequirementsRestriction.create({
            requirements_restrictions_pt: "Requisitos e restrições em português 5",
            requirements_restrictions_fr: "Exigences et restrictions en français 5",
            requirements_restrictions_es: "Requisitos y restricciones en español 5",
            requirements_restrictions_en: "Requirements and restrictions in English 5",
            institution_id: 5
        });

        // Seed Service Cost
        await ServiceCost.create({
            services_costs_pt: "Custos dos serviços em português 1",
            services_costs_fr: "Coûts des services en français 1",
            services_costs_es: "Costos de los servicios en español 1",
            services_costs_en: "Service costs in English 1",
            institution_id: 1
        });

        await ServiceCost.create({
            services_costs_pt: "Custos dos serviços em português 2",
            services_costs_fr: "Coûts des services en français 2",
            services_costs_es: "Costos de los servicios en español 2",
            services_costs_en: "Service costs in English 2",
            institution_id: 2
        });
        
        await ServiceCost.create({
            services_costs_pt: "Custos dos serviços em português 3",
            services_costs_fr: "Coûts des services en français 3",
            services_costs_es: "Costos de los servicios en español 3",
            services_costs_en: "Service costs in English 3",
            institution_id: 3
        });
        
        await ServiceCost.create({
            services_costs_pt: "Custos dos serviços em português 4",
            services_costs_fr: "Coûts des services en français 4",
            services_costs_es: "Costos de los serviços en español 4",
            services_costs_en: "Service costs in English 4",
            institution_id: 4
        });
        
        await ServiceCost.create({
            services_costs_pt: "Gratuito",
            services_costs_fr: "Gratuit",
            services_costs_en: "Free",
            services_costs_es: "Gratuito",
            institution_id: 5
        });

        // Seed Service Hours
        await ServiceHours.create({
            service_hours_pt: "Horários de atendimento em português 1",
            service_hours_fr: "Heures de service en français 1",
            service_hours_es: "Horas de servicio en español 1",
            service_hours_en: "Service hours in English 1",
            institution_id: 1
        });

        await ServiceHours.create({
            service_hours_pt: "Horários de atendimento em português 2",
            service_hours_fr: "Heures de service en français 2",
            service_hours_es: "Horas de servicio en español 2",
            service_hours_en: "Service hours in English 2",
            institution_id: 2
        });
        
        await ServiceHours.create({
            service_hours_pt: "Horários de atendimento em português 3",
            service_hours_fr: "Heures de service en français 3",
            service_hours_es: "Horas de servicio en español 3",
            service_hours_en: "Service hours in English 3",
            institution_id: 3
        });
        
        await ServiceHours.create({
            service_hours_pt: "Horários de atendimento em português 4",
            service_hours_fr: "Heures de service en français 4",
            service_hours_es: "Horas de servicio en español 4",
            service_hours_en: "Service hours in English 4",
            institution_id: 4
        });
        
        await ServiceHours.create({
            service_hours_pt: "Segunda a sexta das 8h-18h",
            service_hours_fr: "Du lundi au vendredi de 8h à 18h",
            service_hours_es: "De lunes a viernes de 8 a 18 horas.",
            service_hours_en: "Monday to Friday from 8 AM to 6 PM.",
            institution_id: 5
        });

        // Seed Services Offered
        await ServicesOffered.create({
            services_offered_pt: "Serviços oferecidos em português 1",
            services_offered_fr: "Services offerts en français 1",
            services_offered_es: "Servicios ofrecidos en español 1",
            services_offered_en: "Services offered in English 1",
            institution_id: 1
        });

        await ServicesOffered.create({
            services_offered_pt: "Serviços oferecidos em português 2",
            services_offered_fr: "Services offerts en français 2",
            services_offered_es: "Servicios ofrecidos en español 2",
            services_offered_en: "Services offered in English 2",
            institution_id: 2
        });
        
        await ServicesOffered.create({
            services_offered_pt: "Serviços oferecidos em português 3",
            services_offered_fr: "Services offerts en français 3",
            services_offered_es: "Servicios ofrecidos en español 3",
            services_offered_en: "Services offered in English 3",
            institution_id: 3
        });
        
        await ServicesOffered.create({
            services_offered_pt: "Serviços oferecidos em português 4",
            services_offered_fr: "Services offerts en français 4",
            services_offered_es: "Servicios ofrecidos en español 4",
            services_offered_en: "Services offered in English 4",
            institution_id: 4
        });
        
        await ServicesOffered.create({
            services_offered_pt: "Apoio Psicológico, Apoio Jurídico, Atendimento Social",
            services_offered_fr: "Soutien Psychologique, Soutien Juridique, Service Social",
            services_offered_es: "Apoyo Psicológico, Apoyo Jurídico, Atención Social",
            services_offered_en: "Psychological Support, Legal Support, Social Service",
            institution_id: 5
        });

        // Seed Target Population
        await TargetPopulation.create({
            target_populations_pt: "População-alvo em português 1",
            target_populations_fr: "Population cible en français 1",
            target_populations_es: "Población objetivo en español 1",
            target_populations_en: "Target population in English 1",
            institution_id: 1
        });

        await TargetPopulation.create({
            target_populations_pt: "População-alvo em português 2",
            target_populations_fr: "Population cible en français 2",
            target_populations_es: "Población objetivo en español 2",
            target_populations_en: "Target population in English 2",
            institution_id: 2
        });

        await TargetPopulation.create({
            target_populations_pt: "População-alvo em português 3",
            target_populations_fr: "Population cible en français 3",
            target_populations_es: "Población objetivo en español 3",
            target_populations_en: "Target population in English 3",
            institution_id: 3
        });

        await TargetPopulation.create({
            target_populations_pt: "População-alvo em português 4",
            target_populations_fr: "Population cible en français 4",
            target_populations_es: "Población objetivo en español 4",
            target_populations_en: "Target population in English 4",
            institution_id: 4
        });

        await TargetPopulation.create({
            target_populations_pt: "Crianças e Adolescentes",
            target_populations_fr: "Enfants et Adolescents.",
            target_populations_es: "Niños y Adolescentes.",
            target_populations_en: "Children and Adolescents",
            institution_id: 5
        });

        


        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error while seeding data:", error);
    }
};

// Execute the seeder
export default runSeeders;
