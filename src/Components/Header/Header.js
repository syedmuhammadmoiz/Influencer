import React from "react";
import NavBar from "./NavBar/NavBar";
import Video from "./Video/Video";
import "./header.css";
const Header = () => {
  return (
    <div className="header_bg">
      <NavBar />
      <div className="discovery">
        <h1 className="header_title">Influencer Discovery</h1>
        <div className="header_sub">
          The fastest and most effecient method to <br />
          find social media influencers.
        </div>
        <button className="header_button">Try for Free Today!</button>
      </div>
      <Video />
    </div>
  );
};

export default Header;
