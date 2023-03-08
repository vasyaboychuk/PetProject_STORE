const {Rating} = require("../dataBase/Rating");
const ApiError = require("../error/ApiError");
const {Device} = require("../dataBase/Device");


module.exports = {
    checkIsRateExist: async (req, res, next) => {
        try {
            const {userId, deviceId} = req.body;
            const user = await Rating.findOne({where:{userId,deviceId}});

            if (user) {
                throw new ApiError('user already leave rate for this device', 404);
            }


            next()
        } catch (e) {
            next(e);
        }

    },
    checkIsDeviceExist:async(req,res,next)=>{
    try{
        const{deviceId}=req.body;
        const device=await Device.findOne({where:{id:deviceId}});
        if (!device){
            throw new ApiError(`Device with this id ${deviceId} not present`,404)
        }
        next();
     }catch(e){
       next(e);
     }

    }
}