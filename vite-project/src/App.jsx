import { React } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from "./pages/LogIn"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
        <Link to="/logIn">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Log In
          </button>
        </Link>
      </BrowserRouter>
    </>
  );
}

export default App
