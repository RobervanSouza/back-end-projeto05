const router = require('express').Router();
const userController = require('../usuarios/users.controller');

router.post('/create', userController.createUserController);
router.get('/todos', userController.findAllUserController);

module.exports = router;
