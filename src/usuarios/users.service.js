

const User = require('../usuarios/User');

const findByEmailUserService = (email) => User.findOne({email: email});

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

const findByIdUserService = (idUser) => User.findById(idUser);

const editarUserService = async (idUser, EditaUser) => {
  const userEdita = await User.findByIdAndUpdate(idUser, EditaUser);
  return userEdita;
};

const deleteUserService = async (idJogoDelete) => {
  return await User.findByIdAndDelete(idJogoDelete);
};
module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByIdUserService,
  editarUserService,
  deleteUserService,
};
