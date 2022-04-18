const { check, validationResult } = require("express-validator")

// rules sign up
exports.SignUpRules = () => [
    check("fullName", "this field is required").notEmpty(),
    check("email", "this field is required").notEmpty(),
    check("email", "should be valid email").isEmail(),
    check("password", "password is short").isLength({min:5})
];

//middleware
exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ?next() :res.status(400).json({errors:errors.array()});
} 