import React from 'react';
import NavBar from '../components/navbar/NavBar';


const About = () => (
<div className="bg-blue-100 h-screen">
    <NavBar />
    <div className="mt-20 flex justify-center items-center">
   <div className="max-w-2xl bg-gray-100 border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" className="flex"> 
         <img alt="chair" className="w-45 rounded-md border-2 border-gray-300" src="https://picsum.photos/id/311/200/200.jpg" />
         <div id="body" className="flex flex-col ml-5">
            <h4 id="name" className="text-xl font-semibold mb-2 text-center">Koppi.link </h4>
            <p id="job" className="text-gray-800 mt-2 text-center">A url shortener writen in React and Node.js.</p>
            <p id="job" className="text-gray-800 mt-2 text-center">To get more info go to
            <a href="https://github.com/kwdi/koppi" className="text-blue-700"> github </a> 
             or check the 
             <a href="https://koppi.link/api-docs/" className="text-blue-700"> API documentation </a> 
            </p>
            <p className="mt-10 italic text-center">Konstantinos Dimitrakopoulos</p>
         </div>
      </div>
   </div>
</div>
</div>
);

export default About;