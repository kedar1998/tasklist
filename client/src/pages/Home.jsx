import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#E9E6FD] flex justify-center items-center'>
        <div className='space-x-5'>
            <Link to="/login" className='px-5 py-2 bg-[#5A4BDA] text-white'>Login</Link>
            <Link to="/register" className='px-5 py-2 bg-[#5A4BDA] text-white'>Register</Link>
        </div>
    </div>
  )
}

export default Home