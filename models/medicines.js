const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicines = sequelize.define('medicines', {
     
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    supplierId:{
        type: DataTypes.UUID,
        allowNull: false
    }
    
});

module.exports = Medicines; 