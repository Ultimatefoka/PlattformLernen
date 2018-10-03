const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb = require('./config/dbConnection')
mongodb.connect()

require('./src/routes')(app)
const port = 9000

app.listen(port, function () {
  console.log(`Listening on Port ${port}`)
})
