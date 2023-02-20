const router = require('express').Router();
const controller=require('../controller/device.controller')

router.get('/', controller.getAll);
router.post('/',controller.createDevice);
router.get('/:id', controller.getOneById);

module.exports=router