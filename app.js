const express = require('express')
const helmet = require('helmet')
const GlobalErrorHandler = require('./ERRORS/GlobalErrorHandler')
require('express-async-errors')
const cors = require('cors')
const taskRouter = require('./routes/taskRouter')

const app = express()
app.use(cors())
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
)
app.use(express.json())
app.use('/api/v1/tasks', taskRouter)
app.use(GlobalErrorHandler)
module.exports = app
