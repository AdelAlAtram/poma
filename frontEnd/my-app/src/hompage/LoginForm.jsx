import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative">
        {/* Layered background card */}
        <div className="absolute bg-blue-400 w-80 h-96 rounded-xl transform rotate-6"></div>

        {/* Main card */}
        <div className="relative bg-white w-80 h-96 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
