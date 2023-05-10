
const createTask = (req,res) =>{
    res.send("Create Task")
}

const getAllTasks = (req,res) =>{
    res.send("Get All Tasks")
}

const updateTask = (req,res) =>{
    res.send("Update Task")
}

const deleteTask = (req,res) =>{
    res.send("Delete Task")
}

export {createTask, getAllTasks, updateTask, deleteTask}