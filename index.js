require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/jogosxbox/jogos.route');
const connectToDatabase = require('./src/database/dataBase');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/Jogos', routes);
const userRoute = require('./src/usuarios/users.route')
app.use('/users', userRoute)

const authRoute = require("./src/auth/auth.route")
app.use('/auth', authRoute);
connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando na posta: ${port}`);
});
