const router = require('express').Router();
const controller = require('../controller/type.controller');

router.get('/', controller.getAll);
router.post('/', controller.createType);

module.exports=router