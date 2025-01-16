import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">
          <Link to="/" className="footer-logo-container">
            <img className="footer-title-logo" src={Logo} alt="logo-footer" />
            <span className="footer__logo-lofi">lofi</span>
          </Link>
          Stay Connected
        </h2>
        <p className="footer-text">¡Sígueme en mis medios para más trabajos!</p>
        <div className="footer-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            🔗
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            🐙
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-credits">© 2025 Eddison Iturra</p>
      </div>
    </footer>
  );
};

export default Footer;