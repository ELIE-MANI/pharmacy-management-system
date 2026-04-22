const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customers = sequelize.define('customers', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   
   },

   contact: {
      type: DataTypes.CHAR(10),
      allowNull: false
   },
   
});

module.exports = Customers;