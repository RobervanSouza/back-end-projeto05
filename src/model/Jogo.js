const mongooose = require('mongoose');

const JogoSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ano: { type: Number, required: true },
  score: { type: Number, required: true },
  trailer: { type: String, required: true },
  gameplay: { type: String, required: true },
});

const Jogo = mongooose.model('xboxjogos', JogoSchema);

module.exports = Jogo;

