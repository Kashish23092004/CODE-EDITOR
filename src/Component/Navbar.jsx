import React from 'react'
import logo from '../assets/logo.png' 
import { FaSave, FaCog, FaUserPlus, FaSignInAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <div className="bg-gradient-to-r from-violet-700 via-purple-600 to-pink-600 flex items-center p-3">
        <div className="text-white">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="ml-auto space-x-4">
          <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white"><FaSave />Save</button>
          <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white"><FaCog/>Setting</button>
          <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white"><FaUserPlus/>Sign up</button>
          <button className="bg-pink-700 px-6 py-2 rounded hover:bg-slate-950 text-white"><FaSignInAlt />Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
