const mongooose = require('mongoose');

const JogoSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ano: { type: Number, required: true },
  score: { type: Number, required: true },
  treiler: { type: String, required: true },
  gameplay: { type: String, required: true },
});

const Jogos = mongooose.model('jogos', JogoSchema);

module.exports = Jogos;

