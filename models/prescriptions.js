const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { id } = require('../validations/customer_validation');

const Prescriptions = sequelize.define('prescriptions', {
       
        },
        
);

module.exports = Prescriptions;