import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Why Us</li>
        <li>Programs</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
