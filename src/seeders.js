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
import Session from "./models/Session.js";
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
            { email: "alex.oliveira@exemplo.com", message: "Lorem ipsum dolor sit amet.", name: "Alex Oliveira", phone: "71983310134", subject: "Informação sobre serviço", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "maria.silva@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", name: "Maria Silva", phone: "71991234567", subject: "Orçamento", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "joao.santos@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet bibendum lacus. Aenean sit amet neque sit amet leo feugiat tincidunt non ut justo. Nulla facilisi. Integer lacinia, felis eu fermentum interdum, orci purus hendrerit nisi, nec luctus libero ligula ut risus. Nam convallis orci ut nisi consequat, nec posuere eros scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam euismod, orci nec tincidunt consequat, velit urna fermentum nisi, eu viverra ante libero nec risus. Curabitur gravida orci ut enim tempor venenatis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", name: "João Santos", phone: "71987654321", subject: "Dúvidas sobre produto que acabei comprando essa semana na loja nova", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "ana.moura@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula arcu sit amet vestibulum malesuada. Fusce et justo tincidunt, interdum nunc a, euismod turpis. Fusce auctor dui libero, a viverra orci euismod non. Ut aliquam risus quam, sed tempus eros consectetur vitae. Nulla facilisi. Integer sit amet augue sit amet mi tempor viverra. Proin interdum lorem a quam mollis, a feugiat augue vulputate. Aliquam erat volutpat. Etiam pharetra nisi in magna sodales gravida.", name: "Ana Moura", phone: "71999887766", subject: "Orçamento", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "bruno.lima@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae massa. Donec dapibus. Duis at velit eu est congue elementum. Mauris vestibulum, nulla vel convallis pretium, purus est fermentum arcu, et sollicitudin sem odio vitae mauris. Aliquam erat volutpat. Duis ac turpis integer dui", name: "Bruno Lima", phone: "71988776655", subject: "Atendimento", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "carla.oliveira@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed gravida ante. Proin quis libero sem. Etiam sodales condimentum dolor ac aliquam. Pellentesque fermentum mi id sapien fermentum aliquet. Phasellus et velit et elit cursus eleifend. Vivamus tincidunt, felis sed varius porttitor, elit magna volutpat dolor, ut consectetur orci tortor et neque. Nulla tristique lobortis mi, vel venenatis arcu hendrerit ac. Ut hendrerit erat vitae erat ullamcorper volutpat. Fusce posuere velit nec enim convallis feugiat. Etiam ac risus arcu. Aenean vel tortor lorem. Nulla facilisi.", name: "Carla Oliveira", phone: "71977665544", subject: "Agendamento", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "daniel.souza@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nunc ut felis tincidunt gravida. Vivamus malesuada tincidunt ligula sit amet placerat. Nam ac nulla arcu. Pellentesque aliquet nec lorem vitae convallis. Quisque et magna sed odio bibendum fermentum et in nisi. Fusce egestas lobortis lacus ac efficitur. Sed fermentum mi vel augue porttitor, id euismod ligula laoreet. Proin et nisi a velit consequat pharetra vel nec metus. Etiam hendrerit suscipit lorem, a aliquam felis eleifend nec. Aenean feugiat nunc a purus venenatis maximus.", name: "Daniel Souza", phone: "71966554433", subject: "Reclamação", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "elisa.costa@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod justo ac felis varius, vel dictum sem tristique. In ac ante nec ante tincidunt dapibus. Nam et pharetra dolor. Cras viverra erat et ex luctus, at malesuada ante tempor. Aliquam erat volutpat. In ultricies, nulla et facilisis cursus, ligula ante interdum nisl, ut posuere tortor nunc vel lectus. Donec rutrum euismod mauris et malesuada. Etiam sollicitudin ex sit amet odio volutpat, eu auctor enim scelerisque. Curabitur auctor lectus risus, non ultricies leo luctus at.", name: "Elisa Costa", phone: "71955443322", subject: "Elogio", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "fabio.pereira@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus magna dolor, nec iaculis urna elementum eu. Sed euismod nisi non felis accumsan interdum. Aenean euismod est vel felis gravida, vel hendrerit libero venenatis. Phasellus eget mi ut lectus luctus posuere non vel lorem. Fusce sit amet massa non risus tincidunt egestas. Integer tempor nisi ut risus congue, at laoreet felis vestibulum. Ut at auctor purus, sed euismod enim. Cras condimentum erat orci, a viverra risus tempor non. Pellentesque ac purus sed erat vulputate scelerisque. Etiam nec tristique mauris, et suscipit felis. Vivamus rhoncus vel velit sed posuere.", name: "Fabio Pereira", phone: "71944332211", subject: "Sugestão", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] },
            { email: "gloria.nunes@exemplo.com", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae massa. Donec dapibus. Duis at velit eu est congue elementum. Mauris vestibulum, nulla vel convallis pretium, purus est fermentum arcu, et sollicitudin sem odio vitae mauris. Aliquam erat volutpat. Duis ac turpis integer dui", name: "Gloria Nunes", phone: "71933221100", subject: "Pagamento", status: ['unread', 'read', 'resolved'][Math.floor(Math.random() * 3)] }
        ]);
        

        // Seed PDF data
        await Pdf.bulkCreate([
            {
                name: "Manuel du migrant en Français",
                description: "Ce PDF est un manuel destiné aux migrants en Français.",
                url: "https://drive.google.com/file/d/1hE4XTmn_7gGd-MfxUKIzqItpBTd_WCLa/view?usp=sharing",
                language: "fr"
            },
            {
                name: "Manual del Migrante en Español",
                description: "Este PDF es un manual para migrantes en Español.",
                url: "https://drive.google.com/file/d/1ur5LPuhLYP8Vf4kDFcx9drLi66D4p4Xj/view?usp=sharing",
                language: "es"
            },
            {
                name: "Migrant Handbook in English",
                description: "This PDF is a handbook for migrants in English.",
                url: "https://drive.google.com/file/d/1WNdYsyZUlwXnQACtl5PA5KUNUv5ROI7T/view?usp=sharing",
                language: "en"
            },
            {
                name: "Manual do Migrante em Português",
                description: "Este PDF é um manual para o migrante em Português.",
                url: "https://drive.google.com/file/d/11S0GMCe3TLStG_OpVrAmfI1jLR27boIh/view?usp=sharing",
                language: "pt"
            },
        ]);

        await Term.create({
            content: '<h1 class=\"ql-align-center\"><strong>Termos e Condições do Migrante (EXEMPLO)</strong></h1><p><br></p><h3 class=\"ql-align-center\">Bem-vindo à seção de edição dos<em> Termos e Condições do Migrante</em>! </h3><h3><br></h3><h3>Este espaço é destinado exclusivamente à atualização e personalização do conteúdo que será visualizado por todos os usuários da plataforma. Aqui, você tem total liberdade para ajustar, adicionar ou remover informações relevantes, conforme necessário.</h3><p><br></p><h3>Para facilitar a edição, estamos usando o editor <u><a href=\"https://quilljs.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Quill</a></u>. Ele permite que você formate o texto facilmente, utilizando opções de <strong>negrito</strong>, <em>itálico</em>, listas e outros recursos de formatação. Abaixo estão algumas instruções básicas para facilitar o uso do editor:</h3><p><br></p><ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Navegação e Edição:</strong> Clique no texto que deseja modificar e utilize as ferramentas do editor Quill para personalizar o conteúdo.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Formatos Disponíveis:</strong></li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Negrito e Itálico</strong>: Para dar destaque a termos importantes ou reforçar pontos específicos.</li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Listas</strong>: Úteis para estruturar informações em tópicos claros e organizados.</li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Links</strong>: Adicione links para redirecionamento a páginas ou documentos externos, quando necessário.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Pré-visualização</strong>: É possível visualizar as mudanças em tempo real, garantindo que o texto final fique conforme desejado.</li></ol><p><br></p><blockquote><strong>Importante</strong>: Certifique-se de revisar todas as informações antes de salvar as edições, garantindo que estejam claras. Tome cuidado com as alterações que serão feitas.</blockquote><p><br></p><h3>Após a edição, lembre-se de clicar em \"<strong>Salvar</strong>\". Em caso de dúvidas ou dificuldades com o uso do editor Quill, consulte o administrador do sistema ou o manual de uso da plataforma.</h3>',
            type: 'migrante'
        });

        await Term.create({
            content: '<h1 class=\"ql-align-center\"><strong>Termos e Condições da Instituição (EXEMPLO)</strong></h1><p><br></p><h3 class=\"ql-align-center\">Bem-vindo à seção de edição dos<em> Termos e Condições da Instituição</em>!</h3><h3><br></h3><h3>Este espaço é destinado exclusivamente à atualização e personalização do conteúdo que será visualizado por todos os usuários da plataforma. Aqui, você tem total liberdade para ajustar, adicionar ou remover informações relevantes, conforme necessário.</h3><p><br></p><h3>Para facilitar a edição, estamos usando o editor <u><a href=\"https://quilljs.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Quill</a></u>. Ele permite que você formate o texto facilmente, utilizando opções de <strong>negrito</strong>, <em>itálico</em>, listas e outros recursos de formatação. Abaixo estão algumas instruções básicas para facilitar o uso do editor:</h3><p><br></p><ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Navegação e Edição:</strong> Clique no texto que deseja modificar e utilize as ferramentas do editor Quill para personalizar o conteúdo.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Formatos Disponíveis:</strong></li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Negrito e Itálico</strong>: Para dar destaque a termos importantes ou reforçar pontos específicos.</li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Listas</strong>: Úteis para estruturar informações em tópicos claros e organizados.</li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Links</strong>: Adicione links para redirecionamento a páginas ou documentos externos, quando necessário.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Pré-visualização</strong>: É possível visualizar as mudanças em tempo real, garantindo que o texto final fique conforme desejado.</li></ol><p><br></p><blockquote><strong>Importante</strong>: Certifique-se de revisar todas as informações antes de salvar as edições, garantindo que estejam claras. Tome cuidado com as alterações que serão feitas.</blockquote><p><br></p><h3>Após a edição, lembre-se de clicar em \"<strong>Salvar</strong>\". Em caso de dúvidas ou dificuldades com o uso do editor Quill, consulte o administrador do sistema ou o manual de uso da plataforma.</h3><p><br></p>',
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
            email: "lucas.marques@vocesabia.com",
            password: await hashPasswordUtil.createHash("senha123"),
            role: 'user'
        });

        await User.create({
            name: 'Dainel Molo',
            email: "daniel.molo@vocesabia.com",
            password: await hashPasswordUtil.createHash("senha123"),
            role: 'admin'
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
