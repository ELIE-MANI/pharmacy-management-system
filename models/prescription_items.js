const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { id } = require('../validations/customer_validation');

const PrescriptionItems = sequelize.define('prescription_items', {
id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
}, 
dosage: {
    type: DataTypes.STRING,
    allowNull: false
},
quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
}

});

module.exports = PrescriptionItems;