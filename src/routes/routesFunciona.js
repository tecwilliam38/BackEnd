const {Router} = require('express');

const routes = Router();

const controller = require('../controllers/cadastroPcController');


routes.post('/cadastroPc',controller.store);
routes.get('/cadastroPc',controller.index);
routes.get('/cadastroPc/:id',controller.show);
routes.put('/cadastroPc/:id',controller.update);
routes.delete('/cadastroPc/:id',controller.exclude);

module.exports = routes;