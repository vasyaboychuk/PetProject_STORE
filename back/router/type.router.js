const router = require('express').Router();
const controller = require('../controller/type.controller');
const middleware = require('../middleware/type.middleware');

router.get('/', controller.getAll);
router.post('/',middleware.isNewTypeValid, controller.createType);

router.delete('/:id',controller.deleteTypeById)

module.exports=router