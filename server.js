//importando o express
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//crinado um varial vel app e excultar a função express
const app = express();
//permitir que envie dados em json
app.use(express.json());

//iniciando a conexao do DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

//Rotas 
app.use('/api', require('./src/routes'));

app.listen(3001);