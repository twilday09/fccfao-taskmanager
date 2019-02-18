const express = require('express')
const router = express.Router();

const bodyParser = require('body-parser')
const TaskModel = require.main.require('./models/task.model.js');


router.get(["/", "/:id"], function(req, res) {
    TaskModel.find(req.query.id || req.params.id, req, res);
})

router.post("/", function(req, res) {
    console.log(req.body)
    const newTask =  new TaskModel(req.body);
    
    newTask.save()
    .then(doc => res.json(doc))
    .catch(err => res.send(err))
})

module.exports = router

