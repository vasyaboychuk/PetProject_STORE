const router = require('express').Router();
const controller = require('../controller/brand.controller');
const middleware = require('../middleware/brand.middleware');

router.post('/',middleware.isNewBrandValid, controller.createBrand);
router.get('/',controller.getAll);

router.delete('/:id',controller.deleteBrandById)

module.exports=router