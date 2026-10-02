const { body ,validationResult } = require('express-validator');

exports.verifSignUp = [
    body('email', 'Not a valid email').isEmail(),
    body('password', 'Your password must contain At least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number, 1 symbol').isStrongPassword()
]

exports.verifSignIn = [
    body('email', 'Not a valid email').isEmail(),
    body('password', 'Your password must contain At least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number, 1 symbol').isStrongPassword()
]


exports.validation=(req, res, next)=>{
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).send(errors)
    }

    next()
}

