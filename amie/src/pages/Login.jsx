import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // In a real app, you'd authenticate here. For now, just navigate to MoodSelection
    navigate('/mood-selection');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center p-6">
        {/* Left side text */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-700">
            Welcome Back
          </h1>
          <p className="text-xl text-gray-600">Your journey to better health.</p>
        </div>
        {/* Right side login form */}
        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Sign In</h2>
          <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
              required
            />
            <div className="flex justify-between text-sm text-blue-600">
              <button type="button" className="hover:underline">
                Forgot Password?
              </button>
              <Link to="/coming-soon" className="hover:underline">
                Create Profile
              </Link>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
