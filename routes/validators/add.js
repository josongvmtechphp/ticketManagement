const { body, validationResult } = require("express-validator");

const validators = [
  body("name")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long")
    .trim(),
  body("email").isEmail().withMessage("Invalid email address").normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one digit")
    .matches(/[@$!%*?&#]/)
    .withMessage("Password must contain at least one special character")
    .trim(),
];

module.exports = validators;
