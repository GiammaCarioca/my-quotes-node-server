const { firebaseDB } = require('../services/firebase')

async function addQuote(req, res) {
  const user = req['currentUser']

  if (!user) {
    res.status(403).send('You must be logged in!')
  } else {
    try {
      const ref = firebaseDB.collection('quotes')
      await ref.add({ ...req.body })
      res.status(201).json(req.body)
    } catch (err) {
      console.log(err)
    }
  }
}

async function deleteQuote(req, res) {
  const user = req['currentUser']

  if (!user) {
    res.status(403).send('You must be logged in!')
  } else {
    try {
      await firebaseDB.collection('quotes').doc(req.body.id).delete()
      res.status(204).send()
    } catch (err) {
      console.log(err)
    }
  }
}

async function getAllQuotes(req, res) {
  const user = req['currentUser']

  if (!user) {
    res.status(403).send('You must be logged in!')
  } else {
    try {
      const quotes = await firebaseDB.collection('quotes').get()
      const quotesData = quotes.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      return res.status(200).json(quotesData)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = {
  getAllQuotes,
  addQuote,
  deleteQuote,
}
