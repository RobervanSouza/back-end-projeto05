const route = require('express').Router();
const controllerJogos = require("../controllers/jogos.controllers")

// todos os jogos
route.get("/todos-jogos", controllerJogos.findAllJogosController)
// id do jogo
route.get('/jogo/:id', controllerJogos.findByIdJogoController);
// criar jogo
route.post('/create', controllerJogos.createJogoController);
// editar jogo
route.put('/update/:id', controllerJogos.updateJogoController);
 // remove jogo
route.delete('/delete/:id', controllerJogos.deleteJogoController);

module.exports = route;








