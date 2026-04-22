const express = require('express');
const router = express.Router();

const prescriptionController = require('../controllers/prescription_controller');

// Create a new prescription
router.post('/', prescriptionController.createPrescription);

module.exports = router;