const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User')
const { verifSignUp, validation, verifSignIn } = require('../Middlewares/Validation')
const { isAuth } = require('../Middlewares/isAuth')


const userRouter = express.Router()

userRouter.post('/SignUp',verifSignUp,validation, SignUp)


userRouter.post('/SignIn', verifSignIn, validation,SignIn)

userRouter.get('/CurrentUser', isAuth,(req, res)=>{res.send(req.user)})

module.exports = userRouter