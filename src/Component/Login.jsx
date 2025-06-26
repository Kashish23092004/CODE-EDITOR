import React from 'react'
import Navbar from './Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md w-80">
          <label className="block text-gray-700 font-semibold mb-2">Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <label className="block text-gray-700 font-semibold mb-2">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
