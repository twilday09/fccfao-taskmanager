const express = require('express');
const router = express.Router();

const Task = require('./task.model');

router.get('/', async (req, res) => {
  // router.get(['/', '/:id'], function(req, res) {
  const task = await Task.find();

  res.json(task);
});

router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);

  res.json(task);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const task = await Task.create(req.body);

  res.json(task);
});

// router.post('/', function(req, res) {
//   console.log(req.body);
//   const newTask = new TaskModel(req.body);

//   newTask
//     .save()
//     .then(doc => res.json(doc))
//     .catch(err => res.send(err));
// });

module.exports = router;
