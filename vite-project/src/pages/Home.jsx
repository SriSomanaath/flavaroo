import React from 'react';
import InterfaceImage from '../assets/Images/InterfaceImage.png';

const Home = () => {
  return (
    <div className="text-center">
      <img src={InterfaceImage} alt="Interface" />
      <p className="mt-4 text-2xl font-bold">Welcome to Tech Arion</p>
    </div>
  );
};

export default Home;
