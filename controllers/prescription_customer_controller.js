const e = require('express');
const router = e.Router();
const { Prescription, Customer, Medicine, Supplier, PrescriptionItem } = require('../models');
// Get all prescriptions for a specific customer
router.get('/customer/:id', async (req, res) => {
  try {
    const data = await Prescription.findAll({
      where: {
        customerId: req.params.id,
      },
      include: [
        {
          model: Customer,
        },
        {
          model: Medicine,
          include: [
            {
              model: Supplier,
            },
          ],
          through: {
            model: PrescriptionItem,
            attributes: ['dosage', 'quantity'],
          },
        },
      ],
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});
module.exports = { getPrescriptionsForCustomer };