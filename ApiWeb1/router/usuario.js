var express = require('express');
var usuarioController = require('../controller/usuario');

var usuarioRouter = express.Router();
usuarioRouter.post('/usuario/login',usuarioController.login);
usuarioRouter.post('/usuario',usuarioController.insert);

module.exports = usuarioRouter;



