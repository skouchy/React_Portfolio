import React from "react";
import Photos from "../../components/Photos";

function Gallery(props) {
  const { currentImage } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{currentImage.image}</h1>
      <p>{currentImage.description}</p>
      <Photos image={currentImage.image}/>
    </section>
  )
}

export default Gallery;