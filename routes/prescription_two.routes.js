const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');
const { Prescription } = require('../models');

//Get a full prescription — customer details, each medicine, dosage, and supplier

router.get('/', async (req, res) => {
    try {
        const data = await Prescription.findAll();
        res.json(data);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;