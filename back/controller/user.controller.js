const {User} = require("../dataBase/User");
const oauthService = require('../service/oauth.service');
const {Basket} = require("../dataBase/Basket");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users=await User.findAll();

            res.json(users)
        } catch (e) {
            next(e);
        }

    },
    createUser:async(req,res,next)=>{
    try{
        const hashPassword= await oauthService.hashPassword(req.body.password);
        const newUser=await User.create({...req.body,password:hashPassword});

        const basket=await Basket.create({userId:newUser.id})
        res.status(201).json(newUser)

     }catch(e){
       next(e);
     }

    },
    getUserById: async (req, res, next) => {
        try {

            next();
        } catch (e) {
            next(e);
        }

    },
    updateUser: async (req, res, next) => {
        try {

            next();
        } catch (e) {
            next(e);
        }

    },
    deleteUserById: async (req, res, next) => {
        try {

            next();
        } catch (e) {
            next(e);
        }

    }
}