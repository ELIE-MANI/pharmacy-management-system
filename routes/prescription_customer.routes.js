const express = require('express');
const router = express.Router();

const prescriptionAllController = require('../controllers/prescription_customer_controller');

router.get('/customer/:id', prescriptionCustomerController.getPrescriptionsForCustomer);

module.exports = router;