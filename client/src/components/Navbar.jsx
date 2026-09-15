import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Government Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <span>Government of Sri Lanka</span>

          <div className="top-links">
            <a href="#">සිංහල</a>
            <a href="#">தமிழ்</a>
            <a href="#">English</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo-placeholder">
              DMT
            </div>

            <div className="logo-text">
              <h2>Department of Motor Traffic</h2>
              <span>මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුව</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <a href="/" className="active">
              Home
            </a>

            <a href="/about">
              About Us
            </a>

            <a href="#">
              Services
            </a>

            <a href="#">
              Downloads
            </a>

            <a href="#">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-button">
            ☰
          </button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;