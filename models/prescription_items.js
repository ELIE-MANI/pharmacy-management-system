const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PrescriptionItems = sequelize.define('prescription_items', {
 dosage: DataTypes.STRING,
 quantity: DataTypes.INTEGER       

});

module.exports = PrescriptionItems;