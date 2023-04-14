import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Orders
        </NavLink>
        <NavLink
          to="/inventory"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Inventory
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
