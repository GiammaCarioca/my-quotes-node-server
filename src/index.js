const express = require('express')
const cors = require('cors')
const quotesRouter = require('./routes/quotesRoutes')

const { decodeIDToken } = require('./middlewares/decodeIDToken')

const app = express()
const PORT = process.env.PORT || 3001

const corsOptions = {
  origin: ['https://node-on-fire-d851e.web.app', 'http://localhost:3000'],
  method: ['GET', 'POST', 'DELETE'],
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(decodeIDToken) // Decodes the Firebase JSON Web Token
app.use('/api/quotes', quotesRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
