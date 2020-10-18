require('./models/User')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()

app.use(bodyParser.json())

app.use(authRoutes)

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', err => {
  console.log('Error connecting to mongo', err)
})



app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
