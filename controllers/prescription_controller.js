const {Prescription, Customer, Medicine, Supplier, PrescriptionItem} = require('../models');

// Create a new prescription
exports.createPrescription = async (req, res) => {
    try {
        const {customerId, items} = req.body;
        if(!customerId) {
            return res.status(400).json({
                message: 'Customer ID is required'
            });
        }
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                message: 'items must be a non-empty array'
            });
        }
        // Create the prescription
        const prescription = await Prescription.create({customerId});

        // Loop through the items and create prescription items
        for (let item of items) {
            await PrescriptionItem.create({
                prescriptionId: prescription.id,
                medicineId: item.medicineId,
                dosage: item.dosage,
                quantity: item.quantity
            });
        }
        res.status(201).json({
            message: 'Prescription created successfully',
            data: prescription
        });

    } catch (error) {
        console.error('Error creating prescription:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while creating the prescription',
        });
    }
}

// Get a full prescription with its items
exports.getFullPrescription = async (req, res) => {
    try {
        const {id} = req.params;
        const prescription = await Prescription.findByPk(id,{
            include: [
                {
                  model: Customer,
                    attributes: ['id', 'name', 'contact']  
                },
                {
                    model: Medicine,
                    attributes: ['id', 'name', 'price'],
                    through: {
                        model: PrescriptionItem,
                        attributes: ['dosage', 'quantity']
                    },
                include: [
                    {
                        model: Supplier,
                        attributes: ['id', 'name', 'contact']
                    }
                ]
            }
            ]
        });
        if (!prescription) {
            return res.status(404).json({
                message: 'Prescription not found'
            });
        }
        res.status(200).json({
            message: 'Prescription retrieved successfully',
            data: prescription
        });

    } catch (error){
        console.error('Error retrieving prescription:', error);
           res.status(500).json({   
            message: error.message || 'An error occurred while retrieving the prescription',
        });     
    }
}