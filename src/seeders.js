import Category from "./models/Category.js";
import Organization from "./models/Organization.js";
import Address from "./models/Address.js";

const runSeeders = async () => {
    try {
        // Contagem de registros existentes
        const addressCount = await Address.count();
        const categoryCount = await Category.count();
        const organizationCount = await Organization.count();

        // Inserção de endereços se a tabela estiver vazia
        if (addressCount === 0) {
            await Address.bulkCreate([
                {
                    cep: "40390675",
                    city: "Salvador",
                    state: "Bahia",
                    neighborhood: "São Caetano",
                    street: "Rua Professor Francisco Góes Calmon"
                },
                {
                    cep: "01001000",
                    city: "São Paulo",
                    state: "São Paulo",
                    neighborhood: "Sé",
                    street: "Praça da Sé"
                },
                {
                    cep: "20010000",
                    city: "Rio de Janeiro",
                    state: "Rio de Janeiro",
                    neighborhood: "Centro",
                    street: "Rua Primeiro de Março"
                },
                {
                    cep: "30130000",
                    city: "Belo Horizonte",
                    state: "Minas Gerais",
                    neighborhood: "Centro",
                    street: "Avenida Afonso Pena"
                },
                {
                    cep: "88015120",
                    city: "Florianópolis",
                    state: "Santa Catarina",
                    neighborhood: "Centro",
                    street: "Rua Dom Jaime Câmara"
                }
            ]);
        }

        // Inserção de categorias se a tabela estiver vazia
        if (categoryCount === 0) {
            await Category.bulkCreate([
                { description: 'ONGs' },
                { description: 'Instituições De Apoio' },
                { description: 'Entidades Governamentais' }
            ]);
        }

        if (organizationCount == 0) {
            await Organization.bulkCreate([
                {
                    company_name: "Associação Proteger",
                    trade_name: "Proteger",
                    cnpj: "98.765.432/0001-11",
                    main_phone: "(11) 91234-5678",
                    email: "contato@proteger.org.br",
                    instagram: "@proteger_ong",
                    address_complement: "Apto 101",
                    link_maps: "https://www.google.com/maps/@-23.550520,-46.633308,11264m",
                    number_address: "789",
                    description_pt: "ONG que atua na proteção e defesa de direitos.",
                    description_fr: "ONG qui œuvre pour la protection et la défense des droits.",
                    description_en: "NGO working for the protection and defense of rights.",
                    description_es: "ONG que trabaja por la protección y defensa de derechos.",
                    address_id: 2, 
                    category_id: 1
                },
                {
                    company_name: "Fundação Esperança",
                    trade_name: "Esperança",
                    cnpj: "34.567.890/0001-22",
                    main_phone: "(31) 92345-6789",
                    secondary_phone: "(31) 98121-9823",
                    email: "contato@esperanca.org.br",
                    instagram: "@fundacaoesperanca",
                    address_complement: "Piso 2",
                    link_maps: "https://www.google.com/maps/@-19.919114,-43.938554,11264m",
                    number_address: "321",
                    site: "www.esperanca.org.br",
                    description_pt: "Fundação voltada para apoio a crianças e adolescentes.",
                    description_fr: "Fondation dédiée au soutien des enfants et des adolescents.",
                    description_en: "Foundation focused on supporting children and adolescents.",
                    description_es: "Fundación dedicada al apoyo a niños y adolescentes.",
                    address_id: 1, 
                    category_id: 2
                },
                {
                    company_name: "Centro de Ação Comunitária",
                    trade_name: "Ação Comunitária",
                    cnpj: "21.543.678/0001-44",
                    main_phone: "(41) 93456-7890",
                    email: "contato@acao.com.br",
                    link_maps: "https://www.google.com/maps/@-25.428954,-49.273107,11264m",
                    number_address: "654",
                    description_pt: "Centro de apoio à comunidade e projetos sociais.",
                    description_fr: "Centre de soutien à la communauté et aux projets sociaux.",
                    description_en: "Community support center and social projects.",
                    description_es: "Centro de apoio a la comunidad y proyectos sociales.",
                    address_id: 5, 
                    category_id: 1
                },
                {
                    company_name: "Instituto Aliança",
                    trade_name: "Aliança",
                    cnpj: "12.111.222/0001-33",
                    main_phone: "(61) 99999-1111",
                    secondary_phone: "(61) 98888-2222",
                    email: "contato@alianca.org.br",
                    instagram: "@institutoalianca",
                    address_complement: "Sala 4A",
                    link_maps: "https://www.google.com/maps/@-15.799857,-47.929196,11264m",
                    number_address: "120",
                    site: "www.alianca.org.br",
                    description_pt: "Instituto que promove a inclusão de jovens em situação de vulnerabilidade.",
                    description_fr: "Institut qui promeut l'inclusion des jeunes en situation de vulnérabilité.",
                    description_en: "Institute promoting the inclusion of vulnerable youth.",
                    description_es: "Instituto que promueve la inclusión de jóvenes en situación de vulnerabilidad.",
                    address_id: 2, 
                    category_id: 2
                },
                {
                    company_name: "Rede do Bem",
                    trade_name: "Bem",
                    cnpj: "23.444.555/0001-44",
                    main_phone: "(21) 96666-7777",
                    secondary_phone: "(21) 95555-8888",
                    email: "contato@rededobem.org.br",
                    instagram: "@rededobem",
                    address_complement: "Andar 3, Sala 302",
                    link_maps: "https://www.google.com/maps/@-22.913947,-43.230433,11264m",
                    number_address: "250",
                    site: "www.rededobem.org.br",
                    description_pt: "Rede de apoio a famílias em situação de vulnerabilidade social.",
                    description_fr: "Réseau de soutien aux familles en situation de vulnérabilité sociale.",
                    description_en: "Network supporting families in social vulnerability.",
                    description_es: "Red de apoyo a familias en situación de vulnerabilidad social.",
                    address_id: 3, 
                    category_id: 1
                }
            ]);
        }
    } catch (error) {
        console.error("Error while seeding data:", error);
    }
};

// Execute the seeder
export default runSeeders;
