import React from "react";
import "./Tag.css";

function Tag(props) {
  const { tags } = props;
  if (!Array.isArray(tags)) {
    return null; 
  }

  return (
    <div className="tag">
      {tags.map((tag, index) => (
        <span key={index} className="tag-item">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tag;
