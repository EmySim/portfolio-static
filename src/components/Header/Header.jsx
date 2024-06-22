import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "@fontsource/cabin-sketch";

function Header({ aboutRef, stackRef, realisationsRef, contactRef, showMenu = true }) {
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTitleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="header">
      <h1 className="header-title">
      <Link to="/portfolio-static/" onClick={handleTitleClick}>Emilie Simson</Link>
      </h1>
      {showMenu && (
        <nav className="nav">
          <ul className='nav-links'>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }}>A propos de moi</a>
            </li>
            <li>
              <a href="#stack" onClick={(e) => { e.preventDefault(); scrollToSection(stackRef); }}>Stack</a>
            </li>
            <li>
              <a href="#realisations" onClick={(e) => { e.preventDefault(); scrollToSection(realisationsRef); }}>Réalisations</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
