const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

// toda vez q o usuario acessar a rota raiz. E recebe dois paramentro onde o seguindo parametro é uma função que recebe
// dois parametros. o REQ simboliza a requisição q esta sendo feito ao servidor. E contem todos os detalhes e informações possiveis, parametro, corpo da requisao, usuarios da req, ip.
// O RES é a resposta da requisição 

routes.get("/products", ProductController.index); 
routes.get("/products/:id", ProductController.show);
routes.post ("/products", ProductController.store);
routes.put ("/products/:id", ProductController.update);
routes.delete ("/products/:id", ProductController.destroy);   



module.exports = routes;