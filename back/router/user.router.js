const router = require('express').Router();
const controller = require('../controller/user.controller');
const middleware = require('../middleware/user.middleware');

router.get('/', controller.getAllUsers);
router.post('/',middleware.isNewUserValid,controller.createUser);

router.delete('/:id', controller.deleteUserById);
router.get('/:id',controller.getUserById);

module.exports=router