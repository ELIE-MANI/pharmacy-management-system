const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Suppliers = sequelize.define('suppliers', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contact: {
        type: DataTypes.CHAR(10),
        allowNull: false

    },
});

module.exports = Suppliers;