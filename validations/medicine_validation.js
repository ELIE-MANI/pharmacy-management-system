const Joi = require('joi');

const medicineSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    price: Joi.number().positive().required(),
    supplierId: Joi.string()
    .guid({ version: 'uuidv4' })
    .required()
});

module.exports = medicineSchema;