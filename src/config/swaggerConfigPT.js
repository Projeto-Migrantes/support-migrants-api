import swaggerJSDoc from "swagger-jsdoc";

const swaggeroptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'RAMB - Rede de Apoio ao Migrante na Bahia (API REST)', 
            description: 'A Rede de Apoio ao Migrante na Bahia é uma iniciativa que oferece suporte e acolhimento a migrantes, promovendo integração e acesso a serviços através de uma API REST.', 
            version: '1.0.0', 
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["../routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggeroptions);

export default swaggerDocs;