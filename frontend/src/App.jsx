import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Anxiety from "./Pages/Anxiety/Anxiety";
import Community from "./Pages/Community/Community";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Resources from "./Pages/Resources/Resources";
import Depression from "./Pages/Depression/Depression";
import axios from "axios";
import Webinar from "./Pages/Webinar/Webinar";

axios.defaults.withCredentials = true;

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/community" element={<Community />} />
          <Route
            path="/signup"
            element={!isLoggedIn ? <Signup /> : <Navigate replace to="/" />}
          />
          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate replace to="/" />}
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/depression" element={<Depression />} />
          <Route path="/webinar" element={<Webinar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
