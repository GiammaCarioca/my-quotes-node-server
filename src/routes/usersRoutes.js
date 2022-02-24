const express = require('express')
const usersController = require('../controllers/usersController')

const router = express.Router()

router.get('/signup', usersController.signup)
router.get('/login', usersController.login)
router.get('/logout', usersController.logout)

router.get('/users', usersController.getAllUsers)

module.exports = router
