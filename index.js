const express = require('express');
const cors = require('cors');
const routes = require('./src/jogosxbox/jogos.route');
const connectToDatabase = require('./src/database/dataBase');
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/Jogos', routes);

connectToDatabase();



// id dos jogos
app.get('/Jogos/jogo/:id', (req, res) => {
  const procuraId = Number(req.params.id);
  const idEncontrado = Jogos.find((jogo) => jogo.id === procuraId);
  res.send(idEncontrado);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
