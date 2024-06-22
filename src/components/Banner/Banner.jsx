import React from 'react';
import './Banner.css';
import { banner1 } from '../../assets/banners';
import { Link } from 'react-router-dom';
import '@fontsource/cabin-sketch';

function Banner({ picture = banner1, pageTitle }) {
  let bannerText = '';
  switch (pageTitle) {
    case 'Portfolio':
      bannerText = (
        <>
          <p className="banner-subtitle">Portfolio d'</p>
          <p className="banner-title">EMILIE SIMSON</p>
          <p className="banner-subtitle">Développement Web Front-End</p>
        </>
      );
      break;
    case 'Error':
      bannerText = (
        <>
          <p className="banner-subtitle">Ouuups !</p>
          <h1 className="banner-title"> 404 - Pas trouvé</h1>
          <p className="banner-link" ><Link to="/portfolio-static/">Retourner sur le portfolio</Link></p>
        </>
      );
      break;
    default:
      bannerText = (
        <>
          <p className="banner-subtitle">Portfolio d'</p>
          <h1 className="banner-title">EMILIE SIMSON</h1>
          <p className="banner-subtitle">Développement Web Front-End</p>
        </>
      );
  }

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
