import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import emblem from "../assets/Emblem.png";
import dmtLogo from "../assets/DMT_logo.png"

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
                            <img
                                src={emblem}
                                alt="Emblem"
                            />
                        </div>

                        <div className="logo-text">
                            <h2>Department of Motor Traffic</h2>
                            <span>මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුව</span>
                        </div>

                        <div className="logo-placeholder logo-placeholder-right">
                            <img
                                src={dmtLogo}
                                alt="Department of Motor Traffic Logo"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            About Us
                        </NavLink>

                        {/* <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Services
                        </NavLink> */}

                        <NavLink
                            to="/downloads"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Downloads
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="menu-button">☰</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
