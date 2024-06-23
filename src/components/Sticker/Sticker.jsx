import React, { useState } from "react";
import "./Sticker.css";
import * as Icons from '../../assets/icons/index'; 

const Sticker = ({ sticker }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleTouchStart = () => {
    setHovered(true);
  };

  const handleTouchEnd = () => {
    setHovered(false);
  };

  const iconName = sticker.picture;
  const IconSrc = Icons[iconName];

  return (
    <div
      className={`sticker ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {IconSrc && !hovered && <img src={IconSrc} alt={`Icone ${sticker.name}`} className="icon-image" />}
      {hovered && <div className="sticker-name">{sticker.name}</div>}
    </div>
  );
};

export default Sticker;
