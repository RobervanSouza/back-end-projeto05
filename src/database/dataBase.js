const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
  .connect('mongodb://localhost:27017/Xbox', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=> console.log("Mongoose Conectado")).catch((erro) => console.log(`Error ao conectar como mongoose Erro: ${erro}`),)
}

module.exports = connectToDatabase;
