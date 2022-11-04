const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
 const Jogo = req.body;

 if (
   !Jogo.name ||
   !Jogo.description ||
   !Jogo.categoria ||
   !Jogo.imageUrl ||
   !Jogo.ano ||
   !Jogo.score ||
   !Jogo.treiler ||
   !Jogo.gameplay
 ) {
   return res.status(400).send({
     message: 'Envie todos os dados do jogo!!, verifique os campos abaixo',
   });
 }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
