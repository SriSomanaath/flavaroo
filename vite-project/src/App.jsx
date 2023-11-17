import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <BrowserRouter>
      <nav className="bg-white p-4 border-slate-300">
      <img src="./images/TecharionLogo.png" alt="Tech Arion Logo" className="bg-white mx-auto mt-8 absolute top-0 left-6 right-0 z-50 object-fill rounded-full" />
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-800 font-medium">
            <Link to="/" className="ml-4">Home</Link>
            <Link to="/logIn" className="ml-4">LogIn</Link>
            <Link to="/reservations" className="ml-4">Reservations</Link>
            <Link to="/private-parties" className="ml-4">Private Parties</Link>
          </div>
          <div className="text-gray-800 font-medium">
            <Link to="/events" className="ml-4">Events</Link>
            <Link to="/contact-us" className="ml-4">Contact Us</Link>
            <Link to="/about-us" className="ml-4">About Us</Link>
          </div>
        </div>
      </nav>
      <div className="relative">
        <Routes>
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
        
      </div>
      <Home />
      <Experience />
    </BrowserRouter>
    </>
  );
}

export default App;
