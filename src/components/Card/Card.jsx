import React, { useState, useEffect } from "react";
import "./Card.css";
import Tag from "../Tag/Tag";
import images from "../../assets/realisations";

function Card({
  id,
  title,
  picture,
  description,
  tags = [],
  gitlink,
  projectlink,
}) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await images[picture]?.() || images.default();
      setImageSrc(imageModule.default);
    };
    loadImage();
  }, [picture]);

  return (
    <div className="card">
      <div className="image-container">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="project-image"
            loading="lazy"  // Utilisation de l'attribut lazy pour améliorer la performance
          />
        )}
        <h3 className="title-overlay">{title}</h3>
        <div className="overlay">
          <p className="description">{description}</p>
          <div className="tag-container">
            <Tag tags={tags} />
          </div>
          <div className="link-container">
            <button className="button-link">
              <a href={gitlink} target="_blank" rel="noopener noreferrer">
                Voir le code sur GitHub
              </a>
            </button>
            <button className="button-link">
              {projectlink && (
                <a href={projectlink} target="_blank" rel="noopener noreferrer">
                  Voir le site
                </a>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
