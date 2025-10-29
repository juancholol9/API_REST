const express = require('express');
const validateRequest = require('../middlewares/validate.middleware');
const personController = require('../controllers/person.controller');
const router = express.Router();
router.get('/', personController.getAllPersons);

router.get('/:id', validateRequest([param('id').isInt().withMessage('ID must be an integer')]), personController.getPersonById);

router.post('/', validateRequest([
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer')
]), personController.createPerson);

router.put('/:id', validateRequest([
    param('id').isInt().withMessage('ID must be an integer'),
    body('name').optional().isString().withMessage('Name cannot be empty'),
    body('email').optional().isEmail().withMessage('Valid email is required'),
    body('age').optional().isInt({ min: 0 }).withMessage('Age must be a positive integer')
]), personController.updatePerson);

router.delete('/:id', validateRequest([param('id').isInt().withMessage('ID must be an integer')]), personController.deletePerson);

module.exports = router;