import React, { useState } from 'react';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetOtp = () => {
    console.log('OTP Sent:', otp);
  };

  const handleLogin = () => {
    console.log('Logged in with OTP:', otp);
  };

  return (
    <>
    <div className="text-center">
      <img
        src="../assets/images/TecharionLogo.png" 
        alt="Tech Arion Logo" 
        className="mx-auto mt-8"
      />
      <h2 className="mt-4 text-2xl font-bold">Welcome to Tech Arion</h2>
      <h6 className = "font-sans">Please sign-in to your account and start the adventure</h6>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <div className="flex">
            <input
              className="appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              className="bg-lime-950 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleGetOtp}
            >
              Get OTP
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            OTP
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className="mt-6">
        <button
  className="bg-lime-950 text-white py-2 px-3 rounded w-full focus:outline-none focus:border-blue-700"
  onClick={handleLogin}
>
  Login
</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
