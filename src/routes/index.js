const {Router} = require('express');

const routes = Router();

const PcController = require('../controllers/pcController');
const UserController = require('../controllers/userController');

// Rotas de cadastro de Computadores
routes.post('/cadastroPc',PcController.insertPc);
routes.get('/cadastroPc',PcController.getAllPc);
routes.get('/cadastroPc/:id',PcController.getPc);
routes.put('/cadastroPc/:id',PcController.updatePc);
routes.get('/search', PcController.searchPc);
routes.get('/consultaPc/:asset',PcController.findPc);
routes.delete('/cadastroPc/:id',PcController.deletePc);

// Rotas de usuário
routes.post('/cadastroUser',UserController.insertUser);
routes.get('/cadastroUser',UserController.getUser);
routes.put('/cadastroUser/:id',UserController.editUser);
routes.delete('/cadastroUser/:id',UserController.deleteUser);

module.exports = routes;