import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const Nav = () => {
  const [navBlack, setNavBlack] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
    };
  };
  return (
    <div className={`nav ${navBlack || "nav__black"}`}>
      <Link to="/" className="logo">
        Movies
      </Link>
      <div className="nav__links">
        <NavLink to="/movies" className="nav__link" style={navStyle}>
          movies
        </NavLink>
        <NavLink to="/tv" className="nav__link" style={navStyle}>
          series
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
