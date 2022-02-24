const db = require('../firebase/config')

async function getAllQuotes(req, res) {
  // const user = req['currentUser']

  // if (!user) {
  //   res.status(403).send('You must be logged in!')
  // }

  const quotes = await db.collection('quotes').get()

  const quotesData = quotes.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return res.json(quotesData)
}

module.exports = {
  getAllQuotes,
}
