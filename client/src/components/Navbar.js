import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate()
  return (
    <div className='h-12 flex items-center justify-between'>
      <Link to="/"><p className='font-bold mx-12 font-lg font-serif'>Cipher Schools</p></Link>
      <div className='flex'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <button onClick={()=>{
          localStorage.removeItem('userInfo')
          history("/")
        }}>O</button>
      </div>
    </div>
  )
}

export default Navbar