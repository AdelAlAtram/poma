import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      // Assuming your backend responds with a token
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem("token", token);

      // Redirect to dashboard or another page after login
      navigate("/Dashboard");
    } catch (error) {
      // Handle login error
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative">
        {/* Layered background card */}
        <div className="absolute bg-blue-400 w-80 h-96 rounded-xl transform rotate-6"></div>

        {/* Main card */}
        <div className="relative bg-white w-80 h-96 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Email Address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Password"
                required
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
