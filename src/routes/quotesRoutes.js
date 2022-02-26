const express = require('express')
const quotesController = require('../controllers/quotesController')

const router = express.Router()

router.get('/', quotesController.getAllQuotes)
router.post('/create', quotesController.addQuote)
router.delete('/:id', quotesController.deleteQuote)

module.exports = router
