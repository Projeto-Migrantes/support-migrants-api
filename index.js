'use strict';

import express from 'express';
import limitador from './src/middlewares/rateLimiter.js';
import connection from './src/config/database.js';

import EstadoCivil from './src/models/EstadoCivil.js';
import Admin from './src/models/Admin.js';
import Arquivo from './src/models/Arquivo.js';
import Categoria from './src/models/Categoria.js';
import Endereco from './src/models/Endereco.js';
import Formulario from './src/models/Formulario.js';
import Migrante from './src/models/Migrante.js';
import Nacionalidade from './src/models/Nacionalidade.js';
import Organizacao from './src/models/Organizacao.js';
import PostoAtendimento from './src/models/PostoAtendimento.js';
import UsuarioRI from './src/models/UsuarioRI.js';

import validarOrganizacao from './src/middlewares/validation/validarOrganizacao.js';
import organizacaoEsquema from './src/schemas/organizacaoSchema.js';

const app = express();
app.use(limitador);
app.use(express.json());

app.post('/organizacao', validarOrganizacao, (req, res) => {
    res.status(200).json({ mensagem: 'Organizacao válida!' });
});

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!');
    })
    .catch(err => {
        console.log('Conexão falhou', err);
    });

connection.sync({ force: true });

app.listen(3000, () => {
    console.log('Rodando');
});
