import React from "react";
import "./header.css";
import logo from "../Image/logo2.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Header" className="logo" />
      <div className="title">
        <h1>MERCURIUS</h1>
      </div>
    </header>
  );
}
export default Header;
