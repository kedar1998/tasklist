import React, {useState} from 'react'
import login from '../assets/register.png'
import { Link } from 'react-router-dom'

const Register = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) =>{
        e.preventDefault()

        if(e.target.name == 'name'){
            setName(e.target.value)
        }

        if(e.target.name == 'email'){
            setEmail(e.target.value)
        }

        if(e.target.name == 'password'){
            setPassword(e.target.value)
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name, email, password);

        // After completing actions
        setName('')
        setEmail('')
        setPassword('')
    }


  return (
    <div className='w-full h-screen bg-[#E9E6FD] flex justify-center items-center'>

        <div className='flex'>

            {/* IMAGE */}
            <div className='bg-white w-full rounded-l-xl'>
                <img src={login} alt="Login" className='' />
            </div>

            {/* FORM */}
            <div className='bg-white w-full pl-5 py-8'>
                <h2 className='text-4xl text-[#5A4BDA] font-semibold'>Register</h2>
                <p className='py-2 text-[#9F9F9F]'>Already a member? <Link to="/login" className='text-black font-semibold'>Login</Link></p>

                <form className='flex flex-col pt-7 pr-5 space-y-5'>
                    <input type="text" name="name" value={name} placeholder='Kedar' className='border-2 h-10 focus:border-[#9F9F9F] focus:outline-none pl-3' onChange={handleChange} />
                    <input type="email" name="email" value={email} placeholder='demo@gmail.com' className='border-2 h-10 focus:border-[#9F9F9F] focus:outline-none pl-3' onChange={handleChange} />
                    <input type="password" name="password" value={password} placeholder='password' className='border-2 h-10 focus:border-[#9F9F9F] focus:outline-none pl-3' onChange={handleChange} />

                    <button to="/register" className='px-5 py-2 bg-[#5A4BDA] text-white' onClick={handleSubmit}>Register</button>
                </form>

            </div>

        </div>
        
        
    </div>
  )
}

export default Register