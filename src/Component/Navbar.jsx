import React, { useState } from 'react'
import logo from '../assets/logo.png' 
import { FaSave, FaCog, FaUserPlus, FaSignInAlt, FaHome, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const Save = () => {
    alert('your changes are saved');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <div className="bg-gradient-to-r from-violet-700 via-purple-600 to-pink-600 flex items-center justify-between p-3 lg:px-6">
        {/* Logo */}
        <div className="text-white flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2 xl:space-x-4">
          <Link to='/'>
            <button className="bg-pink-700 px-3 py-2 xl:px-6 rounded hover:bg-slate-950 text-white flex items-center gap-2 text-sm xl:text-base transition-colors">
              <FaHome />
              <span className="hidden xl:inline">Home</span>
            </button>
          </Link>
          <button onClick={Save} className="bg-pink-700 px-3 py-2 xl:px-6 rounded hover:bg-slate-950 text-white flex items-center gap-2 text-sm xl:text-base transition-colors">
            <FaSave />
            <span className="hidden xl:inline">Save</span>
          </button>
          <button className="bg-pink-700 px-3 py-2 xl:px-6 rounded hover:bg-slate-950 text-white flex items-center gap-2 text-sm xl:text-base transition-colors">
            <FaCog/>
            <span className="hidden xl:inline">Setting</span>
          </button>
          <Link to='/signin'>
            <button className="bg-pink-700 px-3 py-2 xl:px-6 rounded hover:bg-slate-950 text-white flex items-center gap-2 text-sm xl:text-base transition-colors">
              <FaUserPlus/>
              <span className="hidden xl:inline">Sign up</span>
            </button>
          </Link>
          <Link to='/login'>
            <button className="bg-pink-700 px-3 py-2 xl:px-6 rounded hover:bg-slate-950 text-white flex items-center gap-2 text-sm xl:text-base transition-colors">
              <FaSignInAlt />
              <span className="hidden xl:inline">Login</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white text-xl p-2 hover:bg-pink-700 rounded transition-colors"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-gradient-to-r from-violet-700 via-purple-600 to-pink-600 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="flex flex-col space-y-2 p-3 border-t border-pink-500/30">
          <Link to='/' onClick={closeMenu}>
            <button className="w-full bg-pink-700 px-4 py-3 rounded hover:bg-slate-950 text-white flex items-center gap-3 text-left transition-colors">
              <FaHome />Home
            </button>
          </Link>
          <button onClick={() => { Save(); closeMenu(); }} className="w-full bg-pink-700 px-4 py-3 rounded hover:bg-white hover:text-pink-700 text-white flex items-center gap-3 text-left transition-colors">
            <FaSave />Save
          </button>
          <button onClick={closeMenu} className="w-full bg-pink-700 px-4 py-3 rounded hover:bg-white hover:text-pink-700 text-white flex items-center gap-3 text-left transition-colors">
            <FaCog/>Setting
          </button>
          <Link to='/signin' onClick={closeMenu}>
            <button className="w-full bg-pink-700 px-4 py-3 rounded hover:bg-white hover:text-pink-700 text-white flex items-center gap-3 text-left transition-colors">
              <FaUserPlus/>Sign up
            </button>
          </Link>
          <Link to='/login' onClick={closeMenu}>
            <button className="w-full bg-pink-700 px-4 py-3 rounded hover:bg-white hover:text-pink-700 text-white flex items-center gap-3 text-left transition-colors">
              <FaSignInAlt />Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar