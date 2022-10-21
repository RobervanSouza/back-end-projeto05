



const Jogos = require("../model/Jogo")

// todos os jogos
const findAllJogosService = async () => {
const jogos = await Jogos.find();
    return jogos;
}
// id do jogos
const findByIdJogoService = (procuraId) => {
  return Jogos.find((jogo) => jogo.id === procuraId);
};
// cria jogo
const createJogoService = (novoJogo) => {
  const novoId = Jogos.length + 1;
  novoJogo.id = novoId;
  Jogos.push(novoJogo);
  
  return novoJogo;
};
// editar jogo
const editarJogoService = (idJogo, EditaJogo)=>{
  EditaJogo['id'] = idJogo;
  const jogoIndex = Jogos.findIndex((jogo) => jogo.id == idJogo);
  Jogos[jogoIndex] = EditaJogo;
  return EditaJogo;
};
// delete jogo 
const deleteJogoService = (idJogoDelete) => {
  const jogoIndex = Jogos.findIndex((jogo) => jogo.id == idJogoDelete);
  return Jogos.splice(jogoIndex, 1);
};

module.exports = {
  findAllJogosService,
  findByIdJogoService,
  createJogoService,
  editarJogoService,  
   deleteJogoService

};
