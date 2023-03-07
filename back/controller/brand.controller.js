const {Brand} = require('../dataBase/Brand');
module.exports = {
    createBrand: async (req, res, next) => {
        try {
            const {name} = req.body;
            const brand = await Brand.create({name});

            res.json(brand)
        } catch (e) {
            next(e);
        }

    },
    getAll: async (req, res, next) => {
        try {
            const brands = await Brand.findAll();
            res.json(brands);
        } catch (e) {
            next(e);
        }

    },
    deleteBrandById:async(req,res,next)=>{
    try{
        const {id} = req.params;
        await  Brand.destroy({where:{id}})
        res.json("deleted")
     }catch(e){
       next(e);
     }

    }
}