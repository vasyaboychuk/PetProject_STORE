const path = require("node:path");
const {Device} = require("../dataBase/Device");
const {DeviceInfo} = require('../dataBase/DeviceInfo');
module.exports = {
    createDevice: async (req, res, next) => {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = Date.now() + '.jpg';
            img.mv(path.join(process.cwd(), 'static', fileName));
            //     img.mv(path.resolve(__dirname,'..','static',fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if(info){
               let newInfo=JSON.parse(info)
                newInfo.forEach(i=>DeviceInfo.create({
                    title:i.title,
                    description:i.description,
                    deviceId:device.id
                }))
            }

            res.json(device);

        } catch (e) {
            next(e);
        }

    },
    getAll: async (req, res, next) => {
        try {
            let {brandId, typeId, limit, page} = req.query;

            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit

            let devices;
            if (!brandId && !typeId) {
                devices = await Device.findAndCountAll({limit, offset});
            }
            if (brandId && !typeId) {
                devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
            }
            if (!brandId && typeId) {
                devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
            }
            if (brandId && typeId) {
                devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
            }
            res.json(devices)

        } catch (e) {
            next(e)
        }


    },
    getOneById: async (req, res, next) => {
        try{
            const {id} = req.params;
            const device= await Device.findOne(
                {
                    where:{id},
                    include:[{model:DeviceInfo,as:'info'}]
                })

            res.json(device)
        }catch (e){
            next(e)
        }

    }
}