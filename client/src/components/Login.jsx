import React, { useState, useEffect } from 'react'
import login from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAppcontext } from '../context/appcontext'

const Login = () => {

    const navigate  = useNavigate()

    const {user, loginUser} = useAppcontext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) =>{
        e.preventDefault()

        if(e.target.name == 'email'){
            setEmail(e.target.value)
        }

        if(e.target.name == 'password'){
            setPassword(e.target.value)
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email, password);
        const currentUser = {email, password}
        loginUser(currentUser)

        // After completing actions
        setEmail('')
        setPassword('')
    }

    useEffect(() =>{
        if(user){
            setTimeout(() =>{
              navigate("/tasks")
            }, 1000)
          }
    }, [user])


  return (
    <div className='w-full h-screen bg-[#E9E6FD] flex justify-center items-center'>

        <div className='flex'>

            {/* IMAGE */}
            <div className='bg-white w-full rounded-l-xl'>
                <img src={login} alt="Login" className='' />
            </div>

            {/* FORM */}
            <div className='bg-white w-full pl-5 py-16'>
                <h2 className='text-4xl text-[#5A4BDA] font-semibold'>Login</h2>

                <p className='py-2 text-[#9F9F9F]'>New to Tasks? <Link to="/register" className='text-black font-semibold'>Register</Link>
                </p>

                <form className='flex flex-col pt-7 pr-5 space-y-5'>

                    <input type="email" name="email" value={email} placeholder='demo@gmail.com' className='border-2 h-10 focus:border-[#9F9F9F] focus:outline-none pl-3' onChange={handleChange} />

                    <input type="password" name="password" value={password} placeholder='password' className='border-2 h-10 focus:border-[#9F9F9F] focus:outline-none pl-3' onChange={handleChange} />

                    <button to="/register" className='px-5 py-2 bg-[#5A4BDA] text-white' onClick={handleSubmit}>Login</button>
                </form>

            </div>

        </div>
        
        
    </div>
  )
}

export default Login