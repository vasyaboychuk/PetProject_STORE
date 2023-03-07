const brandValidator = require("../validator/brand.validator");
const ApiError = require("../error/ApiError");
module.exports= {
    isNewBrandValid: async (req, res, next) => {
        try {
            let validate = brandValidator.newBrandValid.validate(req.body);

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
