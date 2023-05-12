import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../Image/logo2.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Header" className="logo" />
      </Link>
      <div className="title">
        <h1>MERCURIUS</h1>
      </div>
    </header>
  );
}
export default Header;
