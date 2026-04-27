const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prescriptions = sequelize.define('prescriptions', {
       id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
       },
       customerId:{
        type: DataTypes.UUID,
        allowNull: false
       }
        },

);

module.exports = Prescriptions;