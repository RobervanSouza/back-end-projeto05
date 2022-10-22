const userService = require('../usuarios/users.service');
const authService = require("../auth/auth.service")
const createUserController = async (req, res) => {
  const { name, username, email, password, cpf, isAdmin } = req.body;
  if (!name || !username || !email || !password || !cpf || !isAdmin) {
    return res.status(400).send({ message: 'verifique os campos abaixo' });
  }
  const foundUser = await userService.findByEmailUserService(email);
  if (foundUser) {
    return res.status(400).send({ message: 'Email já existente' });
  }
  const user = await userService
    .createUserService(req.body)
    .catch((error) => console.log(error.message));
    if (!user) {
      return res.status(400).send({ message: 'Não foi possível criar usuario ' });
    }
    
   const token = authService.gerarToken(user.id)
    res.status(200).send({
      user:{
        id: user.id,
        name, username, password, email, cpf, isAdmin, 
      }, 
      token,
    });
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();
  if (!users.length === 0) {
    return res.status(400).send({ message: 'Não existem usuários cadastrado' });
  }


  res.send(users)
};

module.exports = {
  createUserController,
  findAllUserController,
};
