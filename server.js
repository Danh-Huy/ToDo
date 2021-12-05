const express = require('express')
const app = express()
const morgan =  require('morgan')
var bodyParser = require('body-parser')
const path = require('path')
const PORT = 3000

const route = require('./Routes/Task')

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/tasks',route)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})