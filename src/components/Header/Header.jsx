import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header-logo-container">
          <img className="header-title-logo" src={Logo} alt="logo-header" />
          <span className="header__logo-lofi">lofi</span>
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__button">Home</Link>
        <Link to="/NuevoVideo" className="header__button header__button--primary">Nuevo Video</Link>
      </nav>
    </header>
  );
}

export default Header;