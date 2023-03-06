const userValidator = require('../validator/user.validator');
const ApiError = require("../error/ApiError");
const {User} = require("../dataBase/User");
const {where} = require("sequelize");

module.exports = {
    isNewUserValid: async (req, res, next) => {
        try {
            let validate = userValidator.newUserValidator.validate(req.body);

            if (validate.error) {
                throw new ApiError(validate.error.message, 400)
            }
            req.body = validate.value;

            next()
        } catch (e) {
            next(e)
        }
    },
    isUserExist: async (req, res, next) => {
        try {
            const {email} = req.body;
            const user=await User.findOne({where: {email}})
            if(!user){
                throw new ApiError('User not found',404)
            }
            req.user=user;
            next()

        } catch (e) {
            next(e);
        }

    }

}