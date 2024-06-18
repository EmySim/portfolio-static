import React from "react";
import "./Card.css";
import Tag from "../Tag/Tag";
import { NavLink } from "react-router-dom";
import {
  booki,
  sophie,
  nina,
  kasa,
  grimoire,
  defaut,
} from "../../assets/realisations";

function Card({
  id,
  title,
  picture,
  description,
  tags = [],
  gitlink,
  projectlink,
}) {
  const getImageSource = (picture) => {
    switch (picture) {
      case "booki":
        return booki;
      case "sophie":
        return sophie;
      case "nina":
        return nina;
      case "kasa":
        return kasa;
      case "grimoire":
        return grimoire;
      default:
        return defaut;
    }
  };

  return (
    <div className="card">
      <div className="image-container">
        <img
          src={getImageSource(picture)}
          alt={title}
          className="project-image"
        />
<h3 className="title-overlay">{title}</h3>
        <div className="overlay">
          <p className="description">{description}</p>
          <div className="tag-container">
            <Tag tags={tags} />
          </div>

          <div className="link-container">
            <button className="button-link">
              <NavLink to={gitlink}>Voir le code sur GitHub</NavLink>
            </button>
            <button className="button-link">
              {projectlink && <NavLink to={projectlink}>Voir le site</NavLink>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
