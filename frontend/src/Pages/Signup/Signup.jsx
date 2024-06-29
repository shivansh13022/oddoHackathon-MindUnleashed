import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/authSlice";
import Logo from "../Login/Logo.png";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      dispatch(login());
      navigate("/");
      localStorage.setItem("isLoggedIn", "true");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: "#08061C" }}
    >
      <div className="text-center mb-8">
        <h1 className="text-5xl font-sans font-medium text-blue-400">
          Signup to{" "}
          <strong className="font-medium">
            Mind
            <strong className="text-orange-600 fonst-sans font-semibold ">
              UNLEASHED
            </strong>
          </strong>
        </h1>
        <p className="mt-2 text-xl text-pink-600 ">
          Buckle up, brainiacs ,it’s about to get mind-blowingly awesome!
        </p>
      </div>
      <div
        className="bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center"
        style={{ width: "400px", padding: "2rem" }}
      >
        <img src={Logo} alt="Logo" className="w-24 bg-gray-900 mx-auto mb-4" />
        <form onSubmit={handleSubmit} className="w-full bg-gray-900">
          <div className="mb-4 bg-gray-900">
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4 bg-gray-900">
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6 bg-gray-900">
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-center bg-gray-900">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-400 bg-gray-900 mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 bg-gray-900 hover:text-blue-700/30 hover:bg-blue-800/30"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
