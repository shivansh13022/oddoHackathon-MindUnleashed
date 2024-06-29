import React from "react";
import Top from "./Components/Top";
import Offer from "./Components/Offer";
import Brief from "./Components/Brief";
import Ai from "./Components/Ai";
import Sounds from "./Components/Sounds";
import Forum from "./Components/Forum";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";

const Landing = () => {
  return (
    <div>
      <Top />
      <Offer />
      <Brief />
      <Ai />
      <Sounds />
      <Forum />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Landing;
