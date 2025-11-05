const express = require('express');
const { body, param } = require('express-validator');
const validateRequest = require('../middlewares/validate.middleware');
const usersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/', usersController.getAllUsers);

router.get(
    '/:id',
    validateRequest([
        param('id').isInt().withMessage('ID must be an integer'),
    ]),
    usersController.getUserById
);

router.post(
    '/',
    validateRequest([
        body('full_name').isString().withMessage('El nombre completo debe de ser caracteres'),
        body('email').isEmail().withMessage('Ingrese un correo electronico valido'),
        body('password_hash').isString().withMessage('x'),
        body('phone').isNumeric().withMessage("Ingrese un numero telefonico"),
        body('role').isString().withMessage("Ingrese")
    ]),
    usersController.createUser
);

router.put(
    '/:id',
    validateRequest([

    ]),
    usersController.updateUser
);

router.delete(
    '/:id',
    validateRequest([
        param('id').isInt().withMessage('ID must be an integer'),
    ]),
    usersController.deleteUser
);

module.exports = router;
