import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg d-flex justify-content-center align-items-center">
      <div className="fluid-container">
        <Link to="/">
          <button className="navbutton">Home</button>
        </Link>
        <Link to="/weapons">
          <button className="navbutton">All Weapons</button>
        </Link>
        <Link to="/addweapon">
          <button className="navbutton">Add Weapon</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
