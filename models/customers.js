const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customers = sequelize.define('customers', {
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