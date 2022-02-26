const { firebaseDB } = require('../firebase/config')

async function addQuote(req, res) {
  const user = req['currentUser']

  if (!user) {
    res.status(403).send('You must be logged in!')
  } else {
    const ref = firebaseDB.collection('quotes')
    await ref.add({ ...req.body })
  }

  res.json(req.body)
}

async function deleteQuote(req, res) {
  const user = req['currentUser']

  if (!user) {
    res.status(403).send('You must be logged in!')
  } else {
    await firebaseDB.collection('quotes').doc(req.body.id).delete()
  }

  res.status(204).send()
}

async function getAllQuotes(req, res) {
  const user = req['currentUser']

  if (!user) {
    res.status(403).send('You must be logged in!')
  } else {
    const quotes = await firebaseDB.collection('quotes').get()

    const quotesData = quotes.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return res.json(quotesData)
  }
}

module.exports = {
  getAllQuotes,
  addQuote,
  deleteQuote,
}
