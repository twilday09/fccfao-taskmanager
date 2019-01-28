const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    type: {type: String, required: true},
    state: {type: String, required: true},
    description: {type: String},
    createDate: {type: Date, default: Date.now},
    modifiedDate: {type: Date},
    createUser: {type: String, required: true},
    dueDate: {type: Date},
    priority: {type: Number},
    assigneeUser: {type: String},
    parentTask: {type: Number},
    subTasks: {type: [Number]},
    labels: {type: [String]}
 });

// Export task model
module.exports = mongoose.model('Task', TaskSchema);