var express = require('express')
var mongoose = require('mongoose')
var api = require('./routes/api/api.js')
require("dotenv").config()

const bodyParser = require('body-parser')
const app = express()
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
app.use(express.json())
app.use("/api", api)

app.use((req, res, next) => {
    return next({status: 404, message: 'not found'})
})

const listener = app.listen(port, () => {
    console.log('App listining on port ' + listener.address().port)
})
