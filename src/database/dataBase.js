const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://alice:admin@jogoxbox.98uba48.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('Mongoose Conectado'))
    .catch((erro) =>
      console.log(`Error ao conectar como mongoose Erro: ${erro}`),
    );
}

module.exports = connectToDatabase;
