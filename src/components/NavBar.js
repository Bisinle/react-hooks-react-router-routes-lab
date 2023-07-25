import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const LinkStyles = {
    margin: "10px",
    textDecoration: "none",
    backgroundColor: "coral",
    color: "white",
    padding: "5px 20px",
    fontSize: "20px",
  };
  return (
    <div className="navbar">
      <NavLink
        to="/"
        style={LinkStyles}
        activeStyle={{
          background: "#f0094d",
        }}
      >
        Home
      </NavLink>
      <NavLink to="/movies" style={LinkStyles}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={LinkStyles}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={LinkStyles}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
