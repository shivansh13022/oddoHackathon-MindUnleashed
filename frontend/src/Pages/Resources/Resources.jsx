import React, { useEffect } from "react";
import AiSupport from "./AiSupport";
import Blogs from "./Blogs";
import Music from "./Music";
import Video from "./Video";
import Sup from "./Sup";

const Resources = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <AiSupport />
      <Blogs />
      <Music />
      <Video />
      <Sup />
    </div>
  );
};

export default Resources;
