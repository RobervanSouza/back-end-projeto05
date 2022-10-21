const jogoService = require('../services/jogos.services');
const mongoose = require('mongoose');

// todos os jogos
const findAllJogosController = async (req, res) => {
  const todosJogos = await jogoService.findAllJogosService();

  res.send(todosJogos);
};
// id  de jogo
const findByIdJogoController = async (req, res) => {
  const procuraId = req.params.id;

  const idEncontrado = await jogoService.findByIdJogoService(procuraId);
  if (!idEncontrado) {
    return res.status(404).send({ message: 'id não encontrado' });
  }

  res.send(idEncontrado);
};
// cria jogo
const createJogoController = async (req, res) => {
  const Jogo = req.body;
  const novoJogo = await jogoService.createJogoService(Jogo);
  res.status(201).send(novoJogo);
};
// editar jogo
const updateJogoController = async (req, res) => {
  const idJogo = req.params.id;
  const EditaJogo = req.body;
const jogoEditado = await jogoService.editarJogoService(idJogo, EditaJogo);
  res.send(jogoEditado);
};
// delete jogo
const deleteJogoController = async (req, res) => {
  const idJogoDelete = req.params.id;

  await jogoService.deleteJogoService(idJogoDelete);
  res.send({ message: 'Jogo deletado com sucesso!' });
};
module.exports = {
  findAllJogosController,
  findByIdJogoController,
  createJogoController,
  updateJogoController,
  deleteJogoController,
};
