import React, { useRef } from "react";
import "./Portfolio.css";
//composants
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Sticker from "../../components/Sticker/Sticker.jsx";
import Card from "../../components/Card/Card.jsx";
import ContactForm from "../../components/Form/Form.jsx";
import Footer from "../../components/Footer/Footer.jsx";
//data json
import projetsData from "../../data/projets.json";
import profilData from "../../data/profil.json";
import stackData from "../../data/stack.json";
//images
import imageForm from "../../assets/images/imageform.jpg";
import imageAbout from "../../assets/images/imageabout.jpg";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const stackRef = useRef(null);
  const realisationsRef = useRef(null);
  const contactRef = useRef(null);

  // Fonction pour mettre en gras certains mots spécifiques dans le texte
  const formatDescription = (text) => {
    const keywordsToBold = [
      "OpenClassroom",
      "développeur web frontend",
      "équipe",
      "collaborer",
      "contacter",
    ];
    const regex = new RegExp(`\\b(${keywordsToBold.join("|")})\\b`, "gi");
    return text
      .split(regex)
      .map((word, index) =>
        regex.test(word) ? <strong key={index}>{word}</strong> : word
      );
  };

  return (
    <div>
      <Header
        aboutRef={aboutRef}
        stackRef={stackRef}
        realisationsRef={realisationsRef}
        contactRef={contactRef}
      />

      <div className="main-container">
      <Banner pageTitle="Portfolio" />

        <div className="profil-container" ref={aboutRef} id="About">
          <h2>A propos de moi</h2>
          <div className="profil-content">
            <div className="about-container">
            <div className="profil-description">
                {profilData[0] && profilData[0].description ? (
                  profilData[0].description.map((line, index) => (
                    <p key={index}>
                      {formatDescription(line)}
                    </p>
                  ))
                ) : (
                  <p>No description available</p>
                )}
              </div>

              <div className="image-about-container">
                <img src={imageAbout} alt="bureau zen" />
              </div>
            </div>
          </div>
        </div>

        <div className="stack-container" ref={stackRef} id="stack">
          <h2>Stack</h2>
          <div className="stack-content">
            {stackData.techno.map((tech, techIndex) => (
              <Sticker key={techIndex} sticker={tech} />
            ))}
          </div>
        </div>

        <div
          className="project-container"
          ref={realisationsRef}
          id="realisations"
        >
          <h2>Réalisations</h2>
          <div className="project-content">
            <div className="card-container">
              {projetsData.map((projet) => (
                <Card
                  key={projet.id}
                  title={projet.title}
                  description={projet.description}
                  picture={projet.picture}
                  tags={projet.tags}
                  gitlink={projet.gitlink}
                  projectlink={projet.gitlink}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="contact-container" ref={contactRef} id="contact">
          <h2>Contact</h2>
          <div className="contact-content">
            <div className="form-container">
              <div className="form-background">
                <img src={imageForm} alt="Ordinateur" />
                <div className="form-overlay">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
