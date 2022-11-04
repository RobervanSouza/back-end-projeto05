const mongooose = require('mongoose');

const JogoSchema = new mongooose.Schema({
  name: { type: String, required: true },
  categoria: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ano: { type: String, required: true },
  score: { type: String, required: true },
  treiler: { type: String, required: true },
  gameplay: { type: String, required: true },
});

const Jogos = mongooose.model('jogos', JogoSchema);

module.exports = Jogos;

