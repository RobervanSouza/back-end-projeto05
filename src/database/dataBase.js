const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
     process.env.URI_DATABASE,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('Mongoose Atlas Conectado'))
    .catch((erro) =>
      console.log(`Error ao conectar como mongoose Erro: ${erro}`),
    );
}

module.exports = connectToDatabase;
