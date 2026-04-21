const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicines = sequelize.define('medicines', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    
});

module.exports = Medicines; 