const router = require('express').Router();
const userController = require('../usuarios/users.controller');

router.post('/create', userController.createUserController);
router.get('/', userController.findAllUserController);
// editar usuarios
router.put('/update/:id', userController.updateUsuariosController);

 // remove usuarios
router.delete('/delete/:id', userController.deleteUserController);


module.exports = router;
