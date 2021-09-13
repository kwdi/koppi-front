import React from 'react';

const NavBar = () => (
<nav>
    <div class="bg-indigo-400">
      <div class="flex justify-between h-16 px-10 shadow items-center">
        <div class="flex items-center space-x-8">
          <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">Koppi.link</h1>
          <div class="hidden md:flex justify-around space-x-4">
            <a href="/" class="hover:text-indigo-600 text-gray-700">Home</a>
            <a href="/about" class="hover:text-indigo-600 text-gray-700">About</a>
          </div>
        </div>
        <div class="flex space-x-4 items-center">
          <a href="/login" class="text-gray-800 text-sm">LOGIN</a>
          <a href="/signup" class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
          <a href="https://koppi.link/api-docs/" class="hover:text-indigo-600 text-yellow-200">API Docs</a>
        </div>
      </div>
    </div>
  </nav>

);

export default NavBar;