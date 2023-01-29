const {Router} = require('express');

const routes = Router();

const controller = require('../controllers/cadastroPcController');
const cadastroUserController = require('../controllers/cadastroUserController')


routes.post('/cadastroPc',controller.cadastroPc);
routes.get('/cadastroPc',controller.index);
routes.get('/cadastroPc/:id',controller.show);
routes.put('/cadastroPc/:id',controller.update);
routes.delete('/cadastroPc/:id',controller.exclude);

// Rotas de usuário:
routes.post('/cadastrousuario',cadastroUserController.cadastroUser);
routes.get('/cadastrousuario',cadastroUserController.getAllUsers);
routes.get('/cadastrousuario/:id',cadastroUserController.searcUser);
routes.put('/cadastrousuario/:id',cadastroUserController.updateUser);
routes.delete('/cadastrousuario/:id',cadastroUserController.deleteUser);

module.exports = routes;