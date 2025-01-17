import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../Constants/images";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="container containernav">
      <div className="navbarcont">
        {/* Logo */}
        <div>
          <Link to={"/"} className="linkHover">
            <img src={images.logo} className="logoimg" alt="Logo" />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="alllinks d-none d-md-flex">
          <Link to={"/"} className="navlinks">
            Home
          </Link>
          <Link to={"/about"} className="navlinks">
            About Us
          </Link>
          <Link to={"/contactus"} className="navlinks">
            Contact Us
          </Link>
        </div>

        {/* Menu button for mobile */}
        <button className="d-md-none menubtn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RiCloseFill color="black" size={24} />
          ) : (
            <RiMenu3Fill color="black" size={24} />
          )}
        </button>
      </div>
      {/* Mobile menu */}

      <div className={`mobileMenu ${isMenuOpen ? "open" : "close"}`}>
        <div className="responsivenavmain d-flex d-md-none">
          <Link to={"/"} className="navlinks" onClick={toggleMenu}>
            Home
          </Link>
          <Link to={"/about"} className="navlinks" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to={"/contactus"} className="navlinks" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
