import React, { useEffect, useState } from 'react'
import { useAppcontext } from '../context/appcontext'
import Card from '../components/Card'


const Task = () => {

  const [task, setTask] = useState('')

  const {user, logoutUser, addTask, tasks, getAllTasks} = useAppcontext()

  const handleChange = (e) =>{
    setTask(e.target.value)
  }

  const handleLogout = () =>{
    console.log("Logout")
    logoutUser()
  }

  const handleAdd = (e) =>{
    e.preventDefault()
    addTask(task)

    // CLEAR VALUES
    setTask('')
  }


  return (
    <div className='bg-[#E9E6FD] h-screen'>
      {/* NAVBAR */}
      <nav className='bg-[#5A4BDA] max-w-7xl mx-auto p-2 flex items-center justify-between text-white rounded-b-md'>
        <div>
          <h1 className='text-xl font-semibold'>Tasks</h1>
        </div>
        
        <div className='flex space-x-5'>
          <p>{`Hello, ${user.name}`}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* FORM */}
      <form className='max-w-7xl mx-auto flex flex-col justify-center items-center space-y-3 mt-5 py-3 bg-white'>
        <h1 className='text-2xl font-semibold'>Add Task</h1>
        <input type="text" name="task" value={task} placeholder='Add Task' className='w-72 border-2 h-10 focus:border-[#9F9F9F] focus:outline-none pl-3 rounded-md' onChange={handleChange} />
        <button to="/register" className='px-5 py-2 bg-[#5A4BDA] text-white' onClick={handleAdd} >Add</button>
      </form>

      {/* LIST */}
      <div className='mt-5 max-w-7xl mx-auto flex space-x-2'>
        {
          tasks.map((task) =>{
            return (
              <Card key={task._id} {...task} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Task