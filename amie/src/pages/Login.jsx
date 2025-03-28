import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles.css';
import cloud from '../assets/cloud.svg';

function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // In a real app, you'd authenticate here. For now, just navigate to MoodSelection
    navigate('/mood-selection');
  };

  return (
    <div className="max-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center p-6 md:space-x-6 md:space-y-0 mt-16 lg:mt-32">
        {/* Left side text */}
        <div className="w-full md:w-2/3">
          <h1 className="lg:text-6xl text-4xl font-bold lg:mb-4 text-gray-800 lg:text-left text-center">
            Welcome Back
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 lg:text-left text-center mb-6">
            Your journey to better health.
          </p>
        </div>
        {/* Right side login form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl px-8 pb-8 pt-4 z-50">
          <div className='mb-6 md:mb-12'>
          <h1 className='logo text-center select-none'>
            Amie
          </h1>
          {/* <h2 className="text-xl md:text-xl font-semibold text-gray-500 text-center">
            Sign In
          </h2> */}
          </div>
          <form onSubmit={handleSignIn} className="flex flex-col">
            <p className='text-sm mb-2 font-semibold'>
              Email
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white rounded-xl px-4 py-3 focus:outline-none border-gray-200 border mb-8"
              required
            />
            <p className='text-sm mb-2 font-semibold'>
              Password
            </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-white rounded-xl px-4 py-3 focus:outline-none border-gray-200 border"
              required
            />
            <div className="flex justify-between text-sm text-[#3D76D7]">
              <button type="button" className="hover:underline cursor-pointer ml-auto mb-4 mt-2">
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#3D76D7] text-white py-2.5 rounded-xl hover:bg-[#3d66d7] cursor-pointer font-bold mb-4 text-sm"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-white text-[#3D76D7] py-2.5 rounded-xl hover:bg-gray-100 cursor-pointer border-[#3d66d7] border font-bold text-sm"
            >
              <Link to="/coming-soon">Create Profile</Link>
            </button>
          </form>
          <div className='mt-4 mb-4 text-center'>
            <p className='text-xs text-gray-500 font-medium'>
              By signing in, you agree to our <a className='text-blue-500 cursor-pointer'>Terms of Service</a> and <a className='text-blue-500 cursor-pointer'>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
      {/* Cloud */}
      <div className='absolute bottom-0 w-0 lg:w-dvw pointer-events-none z-0'>
        <img src={cloud} className='object-cover w-full'></img>
      </div>
    </div>
  );
}

export default Login;
