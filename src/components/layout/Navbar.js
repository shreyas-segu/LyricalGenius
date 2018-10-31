import React from "react";
import navlogo from "../../headerImage.jpg";

const Navbar = () => {
  return (
    <nav className="navbar mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">
        <img src={navlogo} alt="logo" />
      </span>
    </nav>
  );
};

export default Navbar;
