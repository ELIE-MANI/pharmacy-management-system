const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer_controller');
const validate= require('../middleware/validate');
const customerSchema = require('../validations/customer_validation')
// Create a new customer
router.post('/', 
    validate(customerSchema),
    customerController.createCustomer);

// Get all customers
router.get('/', customerController.getAllCustomers);

// Get a single customer by ID
router.get('/:id', customerController.getCustomerById);

//update a customer
router.put('/:id', customerController.updateCustomer);

// Delete a customer
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;