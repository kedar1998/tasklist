import express from 'express'
const router = express.Router()

import {createTask, deleteTask, getAllTasks, updateTask} from '../controllers/taskController.js'

router.route("/").post(createTask).get(getAllTasks)

router.route("/:id").patch(updateTask).delete(deleteTask)

export default router