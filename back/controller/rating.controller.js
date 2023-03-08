const {Rating} = require("../dataBase/Rating");
module.exports = {
    createRating: async (req, res, next) => {
        try {
            const {rate, deviceId, userId} = req.body;
            const rating = await Rating.create({rate, deviceId, userId});

            res.json(rating)

        } catch (e) {
            next(e);
        }

    },
    deleteRatingById: async (req, res, next) => {
        try {
            const {id} = req.params;
            await Rating.destroy({where: {id}})

            res.json("deleted")
        } catch (e) {
            next(e);
        }


    },
    getAllRatingByDevice: async (req, res, next) => {
        try {
            const {deviceId} = req.params;
            const allRateByDevice = await Rating.findAll({where: {deviceId}})

            res.json(allRateByDevice)
        } catch (e) {
            next(e);
        }

    },
    getAll: async (req, res, next) => {
        try {
            const allRatings = await Rating.findAll();
            res.json(allRatings);
        } catch (e) {
            next(e);
        }

    }
}