import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

import "../Css/ListStyle.css";


const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink
                exact
                to="/"
                className="listItem"
                activeClassName="activeItem"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="listItem"
                activeClassName="activeItem"
              >
                About
              </NavLink>
              <NavLink
                to="/service"
                className="listItem"
                activeClassName="activeItem"
              >
                Service
              </NavLink>

              <NavLink
                to="/contact"
                className="listItem"
                activeClassName="activeItem"
              >
                Contact
              </NavLink>
            </div>
          </nav>
          
        </div>
      </header>
    </>
  );
};

export default List;
