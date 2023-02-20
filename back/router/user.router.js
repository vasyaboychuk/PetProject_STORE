const router = require('express').Router();
const controller = require('../controller/user.controller');

router.get('/', controller.getAllUsers);
router.post('/',controller.createUser)
router.delete('/:id', controller.deleteUserById);
router.get('/:id', controller.getUserById);

module.exports=router