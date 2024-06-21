import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { gitsocial, linkedinsocial } from '../../assets/reseau'; 
import "@fontsource/cabin-sketch";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-title">Emilie Simson</p>
      <div className="icones-footer">
        <NavLink to="https://github.com/EmySim">
          <img src={gitsocial} alt="GitHub" />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/emiliesimson/">
          <img src={linkedinsocial} alt="LinkedIn" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
