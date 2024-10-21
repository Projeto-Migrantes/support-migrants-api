import swaggerJSDoc from "swagger-jsdoc";

const swaggeroptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'RAMB - Rede de Apoio ao Migrante na Bahia (API REST)', 
            description: 'The Migrant Support Network in Bahia is an initiative that offers support and shelter to migrants, promoting integration and access to services through a REST API.', 
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