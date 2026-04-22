const {Customer} = require('../models');

// Create a new customer
exports.createCustomer= async(req, res) => {
    try{
        const customer = await Customer.create(req.body);
        res.status(201).json({
            message: 'Customer created successfully',
            data: customer
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while creating the customer',
        });
    }
};

// Get all customers
exports.getAllCustomers = async (req, res) =>{
    try {
        const customers = await Customer.findAll();
        res.status(200).json({
            message: 'Customers retrieved successfully',
            data: customers
        });
    } catch (error) {
        console.error('Error retrieving customers:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while retrieving customers',
        });
    }

};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({
                message: 'Customer not found'
            });
        }
          res.status(200).json({
                message: 'Customer retrieved successfully',
                data: customer
            });
    } catch (error){
        console.error('Error retrieving customer:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while retrieving the customer',
        });
    }
}

// Update a customer
exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.update(req.body, {
            where: {id: req.params.id}
        });
        if(!customer){
            return res.status(404).json({
                message: 'Customer not found'
            });
        }
        res.status(200).json({
            message: 'Customer updated successfully',
            data: customer
        });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while updating the customer',
        });
    }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await Customer.destroy({
            where: {id: req.params.id}
        });
        if(!deletedCustomer) {
            return res.status(404).json({
                message: 'Customer not found'
            });
        }
        res.status(200).json({
            message: 'Customer deleted successfully'
        })
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while deleting the customer',
        });
    }
}