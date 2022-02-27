const express = require('express')
const cors = require('cors')
const quotesRouter = require('./routes/quotesRoutes')

const { firebaseAdmin } = require('./firebase/config')

const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001

const corsOptions = {
  origin: 'http://localhost:3000',
  method: ['GET', 'POST', 'DELETE'],
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * Decodes the JSON Web Token sent via the frontend app
 * Makes the currentUser (firebase) data available on the body.
 */
async function decodeIDToken(req, res, next) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1]

    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)
      req['currentUser'] = decodedToken
    } catch (err) {
      console.log(err)
    }
  }

  next()
}

app.use(decodeIDToken) // Decodes the Firebase JSON Web Token
app.use('/api/quotes', quotesRouter)

if (process.env.NODE_ENV) {
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
