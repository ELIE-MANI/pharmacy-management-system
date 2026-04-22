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
Customer.hasMany(Prescription);
Prescription.belongsTo(Customer);

// Prescription to Medicine (many-to-many)
Prescription.belongsToMany(Medicine, { through: PrescriptionItem });
Medicine.belongsToMany(Prescription, { through: PrescriptionItem });


module.exports = {
  sequelize,
  Supplier,
  Medicine,
  Customer,
  Prescription,
  PrescriptionItem
};