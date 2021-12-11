const express = require('express')
const app = express()
const morgan =  require('morgan')
var bodyParser = require('body-parser')
const expressHandlebar = require('express-handlebars')
const path = require('path')
const PORT = 3000
const route = require('./Routes/Task')

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req, res, next)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})
app.use('/tasks',route)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})