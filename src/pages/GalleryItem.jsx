import React from "react";
import PropTypes from "prop-types";
import "./GalleryItem.css";

const GalleryItem = ({ image, title }) => {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GalleryItem;