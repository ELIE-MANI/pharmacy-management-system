const express = require('express');
const router = express.Router();

const prescriptionAllController = require('../controllers/prescription_customer_controller');

/**
 * @swagger
 * /prescription_customer/customer/{id}:
 *   get:
 *     summary: Get all prescriptions for a specific customer
 *     tags: [Prescription Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: List of prescriptions for the customer
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prescription'
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get('/customer/:id', prescriptionAllController.getPrescriptionsForCustomer);

module.exports = router;