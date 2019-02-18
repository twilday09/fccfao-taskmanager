var express = require('express')
var router = express.Router();
var task = require('./task/task.js')

router.use("/tasks", task)

module.exports = router
