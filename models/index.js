const sequelize = require("../config/database");

const Supplier = require("./suppliers");
const Medicine = require("./medicines");
const Customer = require("./customers");
const Prescription = require("./prescriptions");
const PrescriptionItem = require("./prescription_items");

// Supplier to Medicine
Supplier.hasMany(Medicine, { foreignKey: 'supplierId' }); ;
Medicine.belongsTo(Supplier, { foreignKey: 'supplierId' });

// Customer to Prescription
Customer.hasMany(Prescription, { foreignKey: 'customerId' });
Prescription.belongsTo(Customer, { foreignKey: 'customerId' });

// Prescription to Medicine (many-to-many)
Prescription.belongsToMany(Medicine, { through: PrescriptionItem, foreignKey: 'prescriptionId', otherKey: 'medicineId' });
Medicine.belongsToMany(Prescription, { through: PrescriptionItem, foreignKey: 'medicineId', otherKey: 'prescriptionId' });

module.exports = {
  sequelize,
  Supplier,
  Medicine,
  Customer,
  Prescription,
  PrescriptionItem
};