const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Suppliers = sequelize.define('suppliers', {
        id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
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