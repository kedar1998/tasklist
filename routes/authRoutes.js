import express from 'express'
const router = express.Router()

import { register, login } from '../controllers/authController.js'

// Route for register user
router.route("/register").post(register)

// Route to login user
router.route("/login").post(login)

export default router