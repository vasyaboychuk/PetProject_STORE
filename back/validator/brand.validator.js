const Joi = require('joi');
module.exports={
    newBrandValid:Joi.object({
        name: Joi.string().min(2).max(100).required().default(''),
    })
}