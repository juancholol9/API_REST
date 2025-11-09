const express = require("express");
const { body, param } = require("express-validator");
const validateRequest = require("../middlewares/validate.middleware");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get(
    "/signup",
    validateRequest([param("id").isInt().withMessage("ID must be an integer")]),
    authController.signupGet
);

router.post(
    "/signup",
    // validateRequest([
    //     param("password_hash")
    //         .isLength({ min: 4 })
    //         .withMessage("Password must be minimun 4 chars"),
    //     param("email").isEmail().withMessage("Enter a valid email")
    // ]),
    authController.signupUser
);

router.get("/login", authController.loginGet);

router.post("/login", authController.loginUser);

module.exports = router;
