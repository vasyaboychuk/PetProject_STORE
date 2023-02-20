const path = require("node:path");
const {Device} = require("../dataBase/Device");
module.exports = {
    createDevice: async (req, res, next) => {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = Date.now() + '.jpg';
            img.mv(path.join(process.cwd(), 'static', fileName));
            //     img.mv(path.resolve(__dirname,'..','static',fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            res.json(device);

        } catch (e) {
            next(e);
        }

    },
    getAll: async (req, res, next) => {


    },
    getOneById: async (req, res, next) => {

    }
}