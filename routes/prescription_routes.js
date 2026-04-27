const express = require('express');
const router = express.Router();


const prescriptionController = require('../controllers/prescription_controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     PrescriptionItem:
 *       type: object
 *       required:
 *         - medicineId
 *         - dosage
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the prescription item
 *         prescriptionId:
 *           type: string
 *           format: uuid
 *           description: ID of the parent prescription
 *         medicineId:
 *           type: string
 *           format: uuid
 *           description: ID of the medicine
 *         dosage:
 *           type: string
 *           description: Dosage instructions
 *         quantity:
 *           type: integer
 *           description: Quantity of medicine
 *       example:
 *         id: "789e0123-e89b-12d3-a456-426614174002"
 *         prescriptionId: "123e4567-e89b-12d3-a456-426614174000"
 *         medicineId: "456e7890-e89b-12d3-a456-426614174001"
 *         dosage: "Take 2 tablets daily"
 *         quantity: 30
 *
 *     Prescription:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the prescription
 *         customerId:
 *           type: string
 *           format: uuid
 *           description: ID of the customer
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PrescriptionItem'
 *       example:
 *         id: "123e4567-e89b-12d3-a456-426614174000"
 *         customerId: "789e0123-e89b-12d3-a456-426614174003"
 *         items: []
 */

/**
 * @swagger
 * /prescriptions:
 *   post:
 *     summary: Create a new prescription
 *     tags: [Prescriptions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - medicineId
 *                     - dosage
 *                     - quantity
 *                   properties:
 *                     medicineId:
 *                       type: string
 *                       format: uuid
 *                     dosage:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *             example:
 *               items:
 *                 - medicineId: "456e7890-e89b-12d3-a456-426614174001"
 *                   dosage: "Take 2 tablets daily"
 *                   quantity: 30
 *     responses:
 *       201:
 *         description: Prescription created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/', prescriptionController.createPrescription);

/**
 * @swagger
 * /prescriptions/{id}:
 *   get:
 *     summary: Get a full prescription with its items
 *     tags: [Prescriptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Prescription ID
 *     responses:
 *       200:
 *         description: Full prescription with items
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription'
 *       404:
 *         description: Prescription not found
 *       500:
 *         description: Server error
 */
router.get('/:id', prescriptionController.getFullPrescription);

module.exports = router;