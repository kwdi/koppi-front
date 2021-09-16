import React from 'react';

const NavBar = () => (
<nav>
    <div className="bg-indigo-400">
      <div className="flex justify-between h-16 px-10 shadow items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Koppi.link</h1>
          <div className="hidden md:flex justify-around space-x-4">
            <a href="/" className="hover:text-indigo-600 text-gray-700">Home</a>
            <a href="/about" className="hover:text-indigo-600 text-gray-700">About</a>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="/login" className="text-gray-800 text-sm">LOGIN</a>
          <a href="/signup" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
          <a href="https://koppi.link/api-docs/" className="hover:text-indigo-600 text-yellow-200">API Docs</a>
        </div>
      </div>
    </div>
  </nav>

);

export default NavBar;