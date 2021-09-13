import React from 'react';
import NavBar from '../components/navbar/NavBar';


const Login = () => (
    <div>
    <NavBar />
    <div class="h-screen bg-blue-100 flex justify-center">
    <div class="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form action="">
        <div class="mb-6">
          <label for="email" class="block text-gray-800 font-bold">Email:</label>
          <input type="text" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        <div>
          <label for="password" class="block text-gray-800 font-bold">Password:</label>
          <input type="password" name="password" id="password" placeholder="password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>
        <butt class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</butt>
      </form>
    </div>
  </div>
  </div>
);

export default Login;