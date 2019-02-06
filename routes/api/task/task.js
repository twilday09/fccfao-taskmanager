var express = require('express')
var router = express.Router();
const task = require.main.require('./models/task.model.js');

router.get(["/", "/:id"], function(req, res) {
    task.find(req.query.id || req.params.id, req, res)
})

module.exports = router

