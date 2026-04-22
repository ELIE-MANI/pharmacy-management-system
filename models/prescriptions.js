const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { id } = require('../validations/customer_validation');

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
});

module.exports = Prescriptions;