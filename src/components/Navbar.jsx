import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-primary d-flex justify-content-center align-items-center">
      <div className="fluid-container ">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/weapons">
          <button>All Weapons</button>
        </Link>
        <Link to="/addweapon">
          <button>Add Weapon</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
