// src/components/SignUpPage.jsx

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { Link } from 'react-router';

// SocialButton Component
const SocialButton = ({ icon: Icon, text }) => {
  return (
    <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 py-3 text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gray-100">
      <Icon className="mr-3 text-xl" />
      {text}
    </button>
  );
};

// SignUpPage Component
const SignUpPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black-200">
      <div className="w-96 rounded-3xl bg-black p-8 shadow-2xl text-white">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Create a new account
        </h1>

        {/* Social Buttons */}
        <div className="space-y-4">
          <SocialButton icon={FcGoogle} text="Sign up with Google" />
          <SocialButton icon={FaFacebook} text="Sign up with Facebook" />
          <SocialButton icon={FaApple} text="Sign up with Apple" />
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-sm text-gray-400">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Input Fields */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="mb-3 w-full rounded-lg border border-gray-600 bg-black px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-full rounded-lg border border-gray-600 bg-black px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-600 bg-black px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign Up & Log In Buttons */}
        <div className="flex space-x-4">
          <button className="w-1/2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-700">
            Sign up
          </button>
          <Link to="/login" className="w-1/2 rounded-lg border border-gray-500 bg-white py-3 text-sm font-semibold text-black transition-all duration-300 ease-in-out hover:bg-gray-100 text-center" >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
