import React from "react";
import { ApiQuiz, LightsCard, Rendezcrew, StarGazer, Bigote2, VirtualAddressBook } from "./images";
import GalleryItem from "./GalleryItem";
import "./GalleryPage.css";

const GalleryPage = () => {
  const galleryItems = [
    { image: ApiQuiz, title: "API Quiz" },
    { image: LightsCard, title: "Lights Card" },
    { image: Rendezcrew, title: "RENDEZCREW Home Dashboard" },
    { image: StarGazer, title: "Star Gazer App" },
    { image: Bigote2, title: "Bigote 2" },
    { image: VirtualAddressBook, title: "Virtual Address Book" },
  ];

  return (
    <div className="gallery-page">
      <h2>Portfolio Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;