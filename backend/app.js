var express = require('express');
var mongoose = require('mongoose');
var tasksController = require('./resources/tasks/task.controller.js');
require('dotenv').config({ path: './.env.local' });

const app = express();
var port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB Connection succesful!'))

  .catch(err => {
    console.log(err);
  });

app.use(express.json());

app.use('/tasks', tasksController);

app.use((req, res, next) => {
  return next({ status: 404, message: 'not found' });
});

const listener = app.listen(port, () => {
  console.log('App listining on port ' + listener.address().port);
});
