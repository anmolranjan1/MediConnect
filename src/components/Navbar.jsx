import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    console.log("Hello");
  return (
    <div>
      <img src={assets.logo} alt="MediConnect Logo" />
      <ul>
        <NavLink>
          <li>Home</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Doctors</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>About</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Contact</li>
          <hr />
        </NavLink>
      </ul>
      <div>
        <button>Create account</button>
      </div>
    </div>
  );
};

export default Navbar;
