import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie
import Logo from "../Images/Logo.png";
import { logout } from "../../Redux/features/authSlice"; // Adjust the path based on your project structure

const Button = ({ title, url }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(url)}
      className="cursor-pointer hover:bg-gray-800 text-blue-300 text-xl rounded-xl px-3 py-1 hover:shadow-lg transform hover:scale-125  duration-150 ease-in-out"
    >
      {title}
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    Cookies.remove("userId"); // Assuming you store the token with this name
    dispatch(logout());
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <div
      className="flex justify-between items-center px-8 py-4"
      style={{ backgroundColor: "#08061C" }}
    >
      <div onClick={() => navigate("/")} className="text-white cursor-pointer">
        <img src={Logo} alt="Logo" className="pt-2 pl-4 h-14 w-24" />
      </div>

      <div className="text-white flex items-center space-x-4">
        <div className="flex gap-4 mr-12">
          <Button title="Home" url="/" />
          <Button title="Anxiety" url="anxiety" />
          <Button title="Depression" url="depression" />
          <Button title="Community" url="community" />
          <Button title="Resources" url="resources" />
          <Button title="Webinar" url="webinar" />
        </div>

        {isLoggedIn ? (
          <div
            onClick={handleLogout}
            className="cursor-pointer hover:bg-gray-900 text-white text-xl rounded-xl px-3 py-1 hover:shadow-lg transform hover:scale-125 duration-150 ease-in-out"
          >
            Logout
          </div>
        ) : (
          <div className="flex gap-2">
            <Button title="Login" url="/login" />

            <Button title="Signup" url="/signup" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
