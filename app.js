var express = require('express');
var mongoose = require('mongoose');
require("dotenv").config();

const Task = require('./models/task.model');
const bodyParser = require('body-parser')
const app = express()
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)

app.get('/', function(req, res) {
    res.send('Hello World')
});

app.use((req, res, next) => {
    return next({status: 404, message: 'not found'})
})

const listener = app.listen(port, () => {
    console.log('App listining on port ' + listener.address().port)
})
