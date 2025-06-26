import React from 'react'
import logo from '../assets/logo.png' 
import { FaSave, FaCog, FaUserPlus, FaSignInAlt, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const Save = () => {
    alert('your changes are saved');
  }

  return (
    <nav>
      <div className="bg-gradient-to-r from-violet-700 via-purple-600 to-pink-600 flex items-center p-3">
        <div className="text-white">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="ml-auto flex space-x-4">
          <Link to='/'>
            <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white flex items-center gap-2">
              <FaHome />Home
            </button>
          </Link>
          <button onClick={Save} className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white flex items-center gap-2">
            <FaSave />Save
          </button>
          <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white flex items-center gap-2">
            <FaCog/>Setting
          </button>
          <Link to='/signin'>
            <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white flex items-center gap-2">
              <FaUserPlus/>Sign up
            </button>
          </Link>
          <Link to='/login'>
            <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white flex items-center gap-2">
              <FaSignInAlt />Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar