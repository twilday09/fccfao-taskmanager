var express = require('express')
var router = express.Router();
var task = require('./task/task.js')

router.use("/tasks", task)

router.use("*", function(req, res) {
    res.send("API");
})

module.exports = router
