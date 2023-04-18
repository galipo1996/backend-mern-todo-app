const express = require('express')
const {
  GetALLTask,
  CreateTask,
  DeleteTask,
  UpdateTask,
} = require('../controllers/TaskControllers')
const Router = express.Router()

Router.get('/', GetALLTask)
Router.post('/', CreateTask)
Router.delete('/:id', DeleteTask)
Router.patch('/:id', UpdateTask)
module.exports = Router
