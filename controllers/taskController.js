import Task from '../models/task.js'
import {createCustomError} from '../error/customError.js'
import checkPermission from '../utils/checkPermission.js'

const createTask = async (req,res, next) =>{
    const {name} = req.body

    if(!name){
        return next(createCustomError("Please provide all values", 400))
    }

    req.body.createdBy = req.user.userId

    const task = await Task.create(req.body)

    res.json({
        task
    })
}

const getAllTasks = async (req,res) =>{
    const task = await Task.find({createdBy: req.user.userId})

    res.json({
        task
    })
}

const updateTask = async (req,res,next) =>{
   const {id} = req.params 

   const {name} = req.body

   if(!name){
    return next(createCustomError("Please provide all values", 400))
   }

   const task = await Task.findOne({_id: id})

   if(!task){
    return next(createCustomError(`No task with id : ${id}`, 400))
   }

   checkPermission(req.user.userId, task.createdBy)

   const updatedTask = await Task.findByIdAndUpdate({_id: id}, req.body, {
    runValidators: true,
    new: true,
   })

   res.json({
    updatedTask
   })
}

const deleteTask = async (req,res) =>{
    const {id} = req.params 

   const task = await Task.findByIdAndDelete({_id: id})

   checkPermission(req.user.userId, task.createdBy)

   res.json({
    msg: "Deleted Successfully!!!"
   })
}

export {createTask, getAllTasks, updateTask, deleteTask}