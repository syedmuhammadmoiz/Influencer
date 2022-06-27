import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import List from "../../../assets/images/list.png";
import "./navBar.css";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav_bar">
      <div className="nav_logo">
        <img className="logo" src={logo} alt="conten-studio" />
      </div>
      <div className="nav_mobile">
        <div className="nav_burger" onClick={toggle}>
          <img className="nav_list" src={List} alt="" />
        </div>
        <div className={"nav_mobile_drop" + (isOpen ? "nav_close" : "")}></div>
      </div>
      <div className="nav_links">
        <p>Products</p>
        <p>Pricing</p>
        <p>Integration</p>
        <p>Contact Us</p>

        <div className="nav_sign">
          <p className="sign_in">Sign In</p>
          <button className="nav_button">Try It For Free</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
