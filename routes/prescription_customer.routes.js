const express = require('express');
const router = express.Router();

const prescriptionAllController = require('../controllers/prescription_customer_controller');

router.get('/customer/:id', prescriptionAllController.getPrescriptionsForCustomer);

module.exports = router;