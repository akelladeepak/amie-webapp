import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles.css'

function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // In a real app, you'd authenticate here. For now, just navigate to MoodSelection
    navigate('/mood-selection');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center p-6 space-x-40">
        {/* Left side text */}
        <div className="md:w-2/3 mb-8 md:mb-0 text-center">
          <h1 className="text-6xl font-bold mb-4 text-gray-800">
            Welcome Back
          </h1>
          <p className="text-2xl text-gray-600">Your journey to better health.</p>
        </div>
        {/* Right side login form */}
        <div className="md:w-1/2 glassmorphic shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-12">Sign In</h2>
          <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className=" bg-white rounded-lg px-4 py-3 focus:outline-none mb-8"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-white rounded-lg px-4 py-3 focus:outline-none"
              required
            />
            <div className="flex justify-between text-sm text-[#3D76D7] mb-18">
              <button type="button" className="hover:underline cursor-pointer">
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#3D76D7] text-white py-2 rounded hover:bg-[#3d66d7] cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="submit"
              className="bg-white text-[#3D76D7] py-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <Link to="/coming-soon" className="">
                Create Profile
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
