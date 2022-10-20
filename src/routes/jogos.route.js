const route = require('express').Router();
const controllerJogos = require("../controllers/jogos.controllers")

// todos os jogos
route.get("/todos-jogos", controllerJogos.findAllJogosController)
// id do jogo
route.get('/jogo/:id', controllerJogos.findByIdJogoController);

module.exports = route;








