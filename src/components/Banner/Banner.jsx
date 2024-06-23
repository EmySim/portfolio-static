import React from 'react';
import './Banner.css';
import { banner1 } from '../../assets/banners';
import '@fontsource/cabin-sketch';

function Banner({ picture = banner1, pageTitle }) {
  const bannerText = (
    <>
      <p className="banner-subtitle">Portfolio d'</p>
      <h1 className="banner-title">EMILIE SIMSON</h1>
      <p className="banner-subtitle">Développement Web Front-End</p>
    </>
  );

  return (
    <div className="banner">
      {picture && <img src={picture} alt="banner" loading="lazy" />}
      <div className="banner-textcontainer">
        {bannerText}
      </div>
    </div>
  );
}

export default Banner;
