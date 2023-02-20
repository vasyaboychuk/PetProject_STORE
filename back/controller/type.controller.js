const {Type} = require('../dataBase/Type');
const ApiError = require('../error/ApiError');


module.exports = {

    createType: async (req, res, next) => {
        try {
            const {name} = req.body;
            const type=await Type.create({name})
            res.json(type)
        } catch (e) {
            next(e);
        }


    },
    getAll: async (req, res, next) => {
        try {
            const types=await Type.findAll()

            res.json(types);
        } catch (e) {
            next(e);
        }

    }
}