import React from "react";
import "./Footer.css";
import "@fontsource/cabin-sketch";
import { gitsocial, linkedinsocial } from '../../assets/reseau'; 

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-title">Emilie Simson</p>
      <div className="icones-reseaux">
                <a href="https://github.com/EmySim" target="_blank" rel="noopener noreferrer">
                  <img src={gitsocial} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/emiliesimson/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinsocial} alt="LinkedIn" />
                </a>
              </div>
      <p>Merci de votre visite</p>
    </div>
  );
};

export default Footer;
