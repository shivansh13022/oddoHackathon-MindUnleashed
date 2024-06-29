import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/authSlice";
import Logo from "./Logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch(login(response.data));
      navigate("/");
      localStorage.setItem("isLoggedIn", "true");
    } catch (error) {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: "#08061C" }}
    >
      <div className="text-center mb-8">
        <h1 className="text-5xl font-sans font-medium text-blue-400">
          Welcome to{" "}
          <strong className="font-medium">
            Mind
            <strong className="text-orange-600 fonst-sans font-semibold ">
              UNLEASHED
            </strong>
          </strong>
        </h1>
        <p className="mt-2 text-xl text-pink-600 ">
          Explore the power of your mind and unleash its full potential.
        </p>
      </div>
      {/* Adjusted div for controlled width, height, and centered content */}
      <div
        className="bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center"
        style={{ width: "400px", padding: "2rem" }} // Adjust width and padding as needed
      >
        <form onSubmit={handleSubmit} className="w-full bg-gray-900">
          <div className="mb-6 bg-gray-900">
            <img
              src={Logo}
              alt="Logo"
              className="w-24 bg-gray-900 mx-auto mb-4"
            />
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 bg-gray-900">
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
          <div className="flex justify-center bg-gray-900">
            <button
              className="bg-blue-500 hover:bg-blue-700/30  text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <p className="text-sm text-gray-400 bg-gray-900 mt-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 bg-inherit hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
