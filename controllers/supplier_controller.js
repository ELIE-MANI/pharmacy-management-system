const e = require('express');
const {Supplier} = require('../models');

// Create a new supplier
exports.createSupplier = async (req, res) => {
    try{
        const supplier = await Supplier.create(req.body);
      res.status(201).json({
        message: 'Supplier created successfully',
        data: supplier
      });

    } catch (error){
        console.error('Error creating supplier:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while creating the supplier',
    
        });
    }
};

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try{
        const suppliers = await Supplier.findAll();
        res.status(200).json({
            message: 'Suppliers retrieved successfully',
            data: suppliers
        });
    } catch (error){
        console.error('Error retrieving suppliers:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while retrieving suppliers',
        });
    }
};

// Get a single supplier by ID
exports.getSupplierById = async (req, res) => {
    try{
        const supplier = await Supplier.findByPk(req.params.id);
        if(!supplier){
            return res.status(404).json({
                message: 'Supplier not found'
            });
        }
        res.status(200).json({
            message: 'Supplier retrieved successfully',
            data: supplier
        });
    } catch (error){
        console.error('Error retrieving supplier:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while retrieving the supplier',
        });
    }
};

// Update a supplier
exports.updateSupplier = async (req, res) =>  {
    try {
        const updatedSupplier = await Supplier.update(req.body, {
            where: {id: req.params.id}
        });
        res.status(200).json({
            message: 'Supplier updated successfully',
            data: updatedSupplier
        });
    
    }catch (error){
        console.error('Error updating supplier:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while updating the supplier',
        });
    }
};

// Delete a supplier
exports.deleteSupplier = async (req, res) => {
    try{
    await Supplier.destroy ({
        where: {id: req.params.id}
    });
    res.status(200).json({
        message: 'Supplier deleted successfully'
    });       
    } catch (error){
        console.error('Error deleting supplier:', error);
        res.status(500).json ({
            message: error.message || 'An error occurred while deleting the supplier',
        });
    }
}