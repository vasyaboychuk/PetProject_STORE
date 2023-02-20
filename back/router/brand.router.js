const router = require('express').Router();
const controller = require('../controller/brand.controller');

router.post('/', controller.createBrand);
router.get('/',controller.getAll);

module.exports=router