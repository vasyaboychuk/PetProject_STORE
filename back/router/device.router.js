const router = require('express').Router();
const controller=require('../controller/device.controller')

router.get('/', controller.getAll);
router.post('/',controller.createDevice);

router.get('/:id', controller.getOneById);
router.delete('/:id',controller.deleteById);

module.exports=router