import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white">
              <Link to="/" className="ml-4">Home</Link>
              <Link to="/logIn" className="ml-4">LogIn</Link>
              <Link to="/reservations" className="ml-4">Reservations</Link>
              <Link to="/private-parties" className="ml-4">Private Parties</Link>
            </div>
            <div className="text-white">
              <Link to="/events" className="ml-4">Events</Link>
              <Link to="/contact-us" className="ml-4">Contact Us</Link>
              <Link to="/about-us" className="ml-4">About Us</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
