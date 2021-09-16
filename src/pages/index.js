import React from 'react';
import Short from '../components/shortener/Short';
import NavBar from '../components/navbar/NavBar';


const IndexPage = () => (
  <div className="bg-blue-100 h-screen">
    <NavBar />
    <Short />
  </div>
);

export default IndexPage
