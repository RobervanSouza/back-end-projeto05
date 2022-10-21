const jogoService = require('../services/jogos.services');
const mongoose = require('mongoose');



// todos os jogos
const findAllJogosController = async (req, res) => {
  const todosJogos = await jogoService.findAllJogosService();



  res.send(todosJogos);
};
// id  de jogo
const findByIdJogoController = (req, res) => {
  const procuraId = Number(req.params.id);
 
  if(!procuraId){
    return res
    .status(400)
    .send({ message: 'verifique o id de jogo'})
  }

  const idEncontrado = jogoService.findByIdJogoService(procuraId);
if (!idEncontrado) {
  return res.status(404).send({ message: 'id não encontrado' });
}


  res.send(idEncontrado);
};
// cria jogo
const createJogoController = (req, res) => {
  const Jogo = req.body;
  
  if (
    !Jogo.nome ||
    !Jogo.description ||
    !Jogo.categoria ||
    !Jogo.imageUrl ||
    !Jogo.ano ||
    !Jogo.score ||
    !Jogo.treiler ||
    !Jogo.gameplay
  ) {
    return res
      .status(400)
      .send({
        message: 'Envie todos os dados do jogo!!, verifique os campos abaixo',
      });
  }
  const novoJogo = jogoService.createJogoService(Jogo);
  res.status(201).send(novoJogo);
 
};
// editar jogo
const updateJogoController = (req, res) => {
  const idJogo = Number(req.params.id);
  if (!idJogo) {
    return res.status(404).send({ message: 'id não encontrado' });
  }
  const EditaJogo = req.body;
    if (
      !EditaJogo ||
      !EditaJogo.nome ||
      !EditaJogo.description ||
      !EditaJogo.categoria ||
      !EditaJogo.imageUrl ||
      !EditaJogo.ano ||
      !EditaJogo.score ||
      !EditaJogo.treiler ||
      !EditaJogo.gameplay
    ) {
      return res
        .status(400)
        .send({
          message: 'Envie todos os dados do jogo para editar!!, verifique os campos abaixo',
        });
    }
  const jogoEditado = jogoService.editarJogoService(idJogo, EditaJogo);
  res.send(jogoEditado);
}
// delete jogo
const deleteJogoController = (req, res) => {
const idJogoDelete= Number(req.params.id);
 if (!idJogoDelete) {
   return res.status(404).send({ message: 'id não encontrado' });
 }
jogoService.deleteJogoService(idJogoDelete);
res.send({ message: 'Jogo deletado com sucesso!' });
}
module.exports = {
  findAllJogosController,
  findByIdJogoController,
  createJogoController,
  updateJogoController,
  deleteJogoController,
};
