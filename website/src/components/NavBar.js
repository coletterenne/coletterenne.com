import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar  is-primary is-spaced has-shadow is-fixed-top">
      <div className="navbar-brand">
        <NavLink exact to="/" className="navbar-item">
          ColetteRenne.com
        </NavLink>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            exact
            to="/"
            className="navbar-item"
            activeClassName="is-active"
          >
            Home
          </NavLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink to="/school" className="navbar-link">
              School
            </NavLink>
            <div className="navbar-dropdown is-boxed">
              <NavLink to="/school/kindergarten" className="navbar-item">
                Kindergarten
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/miss-sniders-prize-game"
            className="navbar-item"
            activeClassName="is-active"
          >
            Miss Snider's Prize Game
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
