const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'you need to insert a task'] },
})

const taskModel = mongoose.model('task', taskSchema)
module.exports = taskModel
