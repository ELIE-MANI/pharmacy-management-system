const Joi = require('joi');

const customerSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    contact: Joi.string().length(10).required()
});

module.exports = customerSchema;