const express = require('express');
const router =express.Router();

const medicineController = require('../controllers/medicine_controller');
const validate = require('../middleware/validate');
const medicineSchema = require('../validations/medicine_validation');

/**
 * @swagger
 * components:
 *   schemas:
 *     Medicine:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - supplierId
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the medicine
 *         name:
 *           type: string
 *           description: Medicine name
 *         price:
 *           type: number
 *           format: decimal
 *           description: Medicine price
 *         supplierId:
 *           type: string
 *           format: uuid
 *           description: ID of the supplier
 *       example:
 *         id: "123e4567-e89b-12d3-a456-426614174000"
 *         name: "Aspirin"
 *         price: 5.99
 *         supplierId: "456e7890-e89b-12d3-a456-426614174001"
 */

/**
 * @swagger
 * /medicines:
 *   post:
 *     summary: Create a new medicine
 *     tags: [Medicines]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medicine'
 *           example:
 *             name: "Aspirin"
 *             price: 5.99
 *             supplierId: "456e7890-e89b-12d3-a456-426614174001"
 *     responses:
 *       201:
 *         description: Medicine created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicine'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/',
    validate(medicineSchema),
    medicineController.createMedicine);

/**
 * @swagger
 * /medicines:
 *   get:
 *     summary: Get all medicines
 *     tags: [Medicines]
 *     responses:
 *       200:
 *         description: List of all medicines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medicine'
 *       500:
 *         description: Server error
 */
router.get('/', medicineController.getAllMedicines);

/**
 * @swagger
 * /medicines/{id}:
 *   get:
 *     summary: Get a medicine by ID
 *     tags: [Medicines]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Medicine ID
 *     responses:
 *       200:
 *         description: Medicine found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicine'
 *       404:
 *         description: Medicine not found
 *       500:
 *         description: Server error
 */
router.get('/:id', medicineController.getMedicineById);

/**
 * @swagger
 * /medicines/{id}:
 *   put:
 *     summary: Update a medicine
 *     tags: [Medicines]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Medicine ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medicine'
 *           example:
 *             name: "Updated Aspirin"
 *             price: 6.99
 *             supplierId: "456e7890-e89b-12d3-a456-426614174001"
 *     responses:
 *       200:
 *         description: Medicine updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicine'
 *       404:
 *         description: Medicine not found
 *       500:
 *         description: Server error
 */
router.put('/:id', medicineController.updateMedicine);

/**
 * @swagger
 * /medicines/{id}:
 *   delete:
 *     summary: Delete a medicine
 *     tags: [Medicines]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Medicine ID
 *     responses:
 *       200:
 *         description: Medicine deleted successfully
 *       404:
 *         description: Medicine not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', medicineController.deleteMedicine);

module.exports = router;
