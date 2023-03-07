const typeValidator = require("../validator/type.validator");
const ApiError = require("../error/ApiError");
module.exports= {
    isNewTypeValid: async (req, res, next) => {
        try {
            let validate = typeValidator.newTypeValid.validate(req.body);

            if (validate.error) {
                throw new ApiError(validate.error.message, 400)
            }
            req.body = validate.value;

            next()
        } catch (e) {
            next(e)
        }
    }
}
