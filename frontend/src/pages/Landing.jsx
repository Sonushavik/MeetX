import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    
    <div className='bg-[url("/backgound.jpg")] bg-cover bg-center h-[100vh] text-[#ebe0d0] font-bold p-4 ' >
      <nav className='navbar flex justify-between  '>
            <div>
              <h1 className='text-4xl text-shadow-pink-400'>Meet<span className='text-pink-500'>X</span></h1>
            </div>
            <div className='flex space-x-2 gap-4 text-xl'>
                <div>
                  <Link to="/aljk23">Guest</Link>
                </div>
                <div>
                  <Link to="/auth">Register</Link>
                </div>
                <div>
                  <Link to="/auth">Login</Link>
                </div>
            </div>
      </nav>
  <div className='h-100 flex justify-center items-center text-center'>
        <div>
              <p className=''>
                <span className='text-4xl'>Connect Collaborate <br/>Communicate</span><br /><br/>
                <Link to="/auth"><button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'>Connect</button></Link><br/>
              </p>
      </div>
      <div className="w-[400px] h-[300px] shadow-[8px_8px_18px_0px_rgba(236,72,153,1)] border border-gray-200 rounded overflow-hidden">
        <img src="./baby.jpg" alt="Cute Baby" className="w-full h-full object-cover" />
      </div>

  </div>
    
    </div>
  )
}

export default Landing
