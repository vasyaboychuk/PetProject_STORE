const router = require('express').Router();
const controller=require('../controller/rating.controller');
const middleware=require('../middleware/rating.middleware');

router.post('/',
    middleware.checkIsDeviceExist,
    middleware.checkIsRateExist,
    controller.createRating
);
router.get('/',controller.getAll)

router.delete('/:id',controller.deleteRatingById);
router.get('/:deviceId',controller.getAllRatingByDevice)

module.exports=router;