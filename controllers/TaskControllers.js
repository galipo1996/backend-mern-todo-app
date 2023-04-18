const Task = require('../models/taskModule')

exports.GetALLTask = async (req, res, next) => {
  const task = await Task.find()
  res.status(200).json({
    status: 'success',
    data: { task },
  })
}
exports.CreateTask = async (req, res, next) => {
  const newTask = await Task.create(req.body)
  res.status(201).json({
    status: 'success',
    data: { newTask },
  })
}
exports.DeleteTask = async (req, res, next) => {
  await Task.findByIdAndDelete(req.params.id)
  res.status(204).json({
    status: 'success',
  })
}
exports.UpdateTask = async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  })
}
