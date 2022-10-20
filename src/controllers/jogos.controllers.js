const jogoService = require('../services/jogos.services');


// todos os jogos
const findAllJogosController = (req, res) => {
  const todosJogos = jogoService.findAllJogosService();
  res.send(todosJogos);
};
// id  de jogo
const findByIdJogoController = (req, res) => {
  const procuraId = Number(req.params.id);
  const idEncontrado = jogoService.findByIdJogoService(procuraId);
  res.send(idEncontrado);
};

module.exports = {
  findAllJogosController,
  findByIdJogoController,
};
