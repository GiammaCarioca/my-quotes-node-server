const express = require('express')
const quotesRouter = require('./routes/quotesRoutes')
const usersRouter = require('./routes/usersRoutes')

const PORT = process.env.PORT || 3001

const path = require('path')
const app = express()

let authorized = true

function checkAuth(req, res, next) {
  if (authorized) {
    next()
  } else {
    res.status(403).send('Unauthorized!')
    return
  }
}

// Have Node serve the files for our built React app
app.use('/api/quotes', quotesRouter)
app.use('/', usersRouter)
app.use('/', checkAuth)

if (process.env.NODE_ENV) {
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
