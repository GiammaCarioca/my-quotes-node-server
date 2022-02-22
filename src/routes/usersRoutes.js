const express = require('express')
const usersController = require('../controllers/usersController')

const router = express.Router()

// router.post('/signup', usersController.signup)
// router.post('/login', usersController.login)
// router.post('/logout', usersController.logout)

router.get('/users', usersController.getAllUsers)
// router.get('/users/:id', usersController.getUser)

module.exports = router
