import express from "express";
import limitador from "./middlewares/rateLimiter.js";
import organizacaoEsquema from './middlewares/validation/validateOrganization.js';
import { dotenv } from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express();

app.use(limitador);

app.get('/api', (req, res) => {
    console.log(organizacaoEsquema.validate({
        razaoSocial: "SLA",
        nomeFantasia: "SLA2",
        cnpj: "93.068.243/0001-42"
    }));
    
});

app.listen(3000, console.log('Rodando'));