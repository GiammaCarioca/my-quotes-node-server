const express = require('express')
const quotesController = require('../controllers/quotesController')

const router = express.Router()

router.get('/', quotesController.getAllQuotes)

module.exports = router
