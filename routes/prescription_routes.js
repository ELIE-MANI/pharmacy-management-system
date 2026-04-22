const express = require('express');
const router = express.Router();


const prescriptionController = require('../controllers/prescription_controller');

// Create a new prescription
router.post('/', prescriptionController.createPrescription);
// Get a full prescription with its items
router.get('/:id', prescriptionController.getFullPrescription);

module.exports = router;