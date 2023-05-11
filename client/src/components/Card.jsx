import React from 'react'

const Card = ({name, _id}) => {
  return (
    <div className='bg-white my-2 w-[250px] h-[120px] p-2 break-all flex flex-col justify-between'>
        <p>{name}</p>
        <div className='flex space-x-2'>
            <button className='px-5 border-2 border-[#5A4BDA] hover:bg-[#5A4BDA] hover:text-white transition-bg duration-500 ease-in-out'>edit</button>
            <button className='px-5 border-2 border-[#5A4BDA] hover:bg-[#5A4BDA] hover:text-white transition-bg duration-500 ease-in-out'>delete</button>
        </div>
    </div>
  )
}

export default Card