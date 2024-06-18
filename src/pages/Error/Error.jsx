import React from 'react';
import Header from '../../components/Header/Header.jsx'; 
import Banner from "../../components/Banner/Banner.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import './Error.css';

function Erreur() {
  return (
    <div>
      <div className="main-container">
        <Header showMenu={false} /> 
        <main>
          <section id="section-principale-404">
          <Banner pageTitle="Error" />
            
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Erreur;
