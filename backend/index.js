const express = require('express')
const app = express()

const connectToDatabase = require('./db/connect')
const notesRouter = require('./controllers/notes')
const { errorHandler, unknownEndpoint } = require('./utils/middleware')

connectToDatabase()

app.use(express.json())
app.use(express.static('dist'))
app.use('/api/notes', notesRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
