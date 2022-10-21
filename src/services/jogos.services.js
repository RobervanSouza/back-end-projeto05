



const Jogos = require("../model/Jogo")

// todos os jogos
const findAllJogosService = async () => {
const jogos1 = await Jogos.find();
    return jogos1;
}
// id do jogos
const findByIdJogoService = async (procuraId) => {
  const jogo1 = await Jogos.findById(procuraId)
  return jogo1;
};
// cria jogo
const createJogoService = async (novoJogo) => {
const newjogo = await Jogos.create(novoJogo)
  
  return newjogo;
};
// editar jogo
const editarJogoService = async (idJogo, EditaJogo)=>{
 const jogoEdita = await Jogos.findByIdAndUpdate(idJogo, EditaJogo);
  return jogoEdita;
};
// delete jogo 
const deleteJogoService = async (idJogoDelete) => {
return await Jogos.findByIdAndDelete(idJogoDelete)
};

module.exports = {
  findAllJogosService,
  findByIdJogoService,
  createJogoService,
  editarJogoService,  
   deleteJogoService

};
