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

let TaskModel = mongoose.model('Task', TaskSchema);

 /**
 * Find document by id
 * @param {any} _id of a Task document. null value returns all documents for Task collection 
 * @param {Request} Request object 
 * @param {Response} Response object 
 */
exports.find = function(_id, req, res) {
    TaskModel.find(_id ? {"_id" : _id} : {})
             .then(doc => res.json(doc))
             .catch(err => res.send(err))
}

module.exports = TaskModel