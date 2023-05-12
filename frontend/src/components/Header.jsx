import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../Image/Logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Header" className="logo" />
      </Link>
    </header>
  );
}
export default Header;
