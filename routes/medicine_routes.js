const express = require('express');
const router =express.Router();

const medicineController = require('../controllers/medicine_controller');
const validate = require('../middleware/validate');
const medicineSchema = require('../validations/medicine_validation');
// Create a new medicine
router.post('/', 
    validate(medicineSchema),
    medicineController.createMedicine);

// Get all medicines
router.get('/', medicineController.getAllMedicines);

// Get a single medicine by ID
router.get('/:id', medicineController.getMedicineById);

// Update a medicine
router.put('/:id', medicineController.updateMedicine);

// Delete a medicine
router.delete('/:id', medicineController.deleteMedicine);

module.exports = router;
