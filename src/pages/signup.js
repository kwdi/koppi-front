import React from 'react';
import NavBar from '../components/navbar/NavBar';


const Signup = () => (
    <div>
    <NavBar />
    <div className="h-screen bg-blue-100 flex justify-center">
    <div className="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form action="">
        <div className="mb-6">
          <label for="email" className="block text-gray-800 font-bold">Email:</label>
          <input type="text" name="email" id="email" placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        <div>
          <label for="password" className="block text-gray-800 font-bold">Password:</label>
          <input type="password" name="password" id="password" placeholder="password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>
        <butt className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Sign Up</butt>
      </form>
    </div>
  </div>
  </div>
);

export default Signup;