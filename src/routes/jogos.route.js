const route = require('express').Router();
const controllerJogos = require("../controllers/jogos.controllers")

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')
const { validId, validObjectBody } = require('../middleware/jogo.middleware');

// rotas swagger
route.use("/api-docs", swaggerUi.serve)
route.get("/api-docs", swaggerUi.setup(swaggerDocument))

// todos os jogos
route.get("/todos-jogos", controllerJogos.findAllJogosController)

// id do jogo
route.get('/jogo/:id', validId, controllerJogos.findByIdJogoController);

// criar jogo
route.post('/create',validObjectBody, controllerJogos.createJogoController);

// editar jogo
route.put('/update/:id', validId, validObjectBody, controllerJogos.updateJogoController);

 // remove jogo
route.delete('/delete/:id', validId, controllerJogos.deleteJogoController);


module.exports = route;








