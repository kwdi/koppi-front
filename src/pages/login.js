import React, { useState }  from 'react';
import axios from 'axios';
import NavBar from '../components/navbar/NavBar';


const Login = () => {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');


const login = async (email, password) => {
  console.log("login exec")
  try {
    const res = await axios.post('https://koppi.link/auth/login',  {
    email: email,
    password: password
  },{ withCredentials: true });
  //console.log(res);
} catch(error){
  console.log(error);
}
}

const onSubmit = e => {
  e.preventDefault();
  console.log("hello")
  login(email, pass);
  setEmail('');
  setPass('');

};




return (
    <div>
    <NavBar />
    <div className="h-screen bg-blue-100 flex justify-center">
    <div className="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form action=""  onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="block text-gray-800 font-bold">Email:</label>
          <input type="text" name="email" id="email" placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" 
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
          onBlur={(e) => { e.target.placeholder = '@email'; }}
          />
        </div>

        <div>
          <label className="block text-gray-800 font-bold">Password:</label>
          <input type="password" name="password" id="password" placeholder="password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" 
          required
          value={pass}
          onChange={(e) => { setPass(e.target.value); }}
          onBlur={(e) => { e.target.placeholder = 'password'; }}
          />
        </div>
        <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
      </form>
    </div>
  </div>
  </div>
)
};

export default Login;