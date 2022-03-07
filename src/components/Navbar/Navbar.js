import React from "react";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__icon">
        <HamburgerMenu />
      </div>

      <img
        className="navbar__logo"
        src="https://daveexaminestv.files.wordpress.com/2015/09/limitless-55fd6e7a05468.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
