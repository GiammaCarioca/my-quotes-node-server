const quotes = require('../quotes.json')

function getAllQuotes(req, res) {
  res.json(quotes)
}

module.exports = {
  getAllQuotes,
}
