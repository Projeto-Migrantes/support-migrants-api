'use strict' //Para normalizar o código

const express = require('express');
const limitador = require('./src/middlewares/rateLimiter');
const connection = require('./src/config/database');

const EstadoCivil = require('./src/models/EstadoCivil');
const Admin = require('./src/models/Admin');
const Arquivo = require('./src/models/Arquivo');
const Categoria = require('./src/models/Categoria');
const Endereco = require('./src/models/Endereco');
const Formulario = require('./src/models/Formulario');
const Migrante = require('./src/models/Migrante');
const Nacionalidade = require('./src/models/Nacionalidade');
const Organizacao = require('./src/models/Organizacao');
const PostoAtendimento = require('./src/models/PostoAtendimento');
const UsuarioRI = require('./src/models/UsuarioRI');


const app = express();
app.use(limitador);
app.use(express.json());

connection.authenticate().then(() => {
    console.log('Conexão feita com sucesso!');
}).catch(err => {
    console.log('Conexão falhou', err)
});

connection.sync({ force: true });



app.listen(3000, console.log('Rodando'));