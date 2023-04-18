const mongoose = require('mongoose')
require('dotenv').config()

const app = require('./app')

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD)
mongoose.connect(db).then(() => console.log('hello from db'))

const port = process.env.PORT
app.listen(port, () => {
  console.log(`server on port ${port} ...`)
})
