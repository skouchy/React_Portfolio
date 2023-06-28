import React, { useState } from "react";
import {
  ApiQuiz,
  Rendezcrew,
  StarGazer,
  VirtualAddressBook,
  Seo,
} from "../../assets/images/small";

const Photos = ({ item }) => {


  const [photos] = useState([
    {
      image: ApiQuiz,
      title: "API Quiz",
      path: 'small/api-quiz.png',
      item: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      image: Rendezcrew,
      title: "RENDEZCREW",
      path: 'small/rendezcrew.png',
      item: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      image: StarGazer,
      title: "Star Gazer App",
      path: 'small/star-gazer.png',
      item: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      image: VirtualAddressBook,
      title: "Virtual Address Book",
      path: 'small/virtual-address-book.jpg',
      item: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      image: Seo,
      title: "SEO Accessibility",
      path: 'small/seo.png',
      item: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.item === item);



  return (
      <div classImage="flex-row">
        {currentPhotos.map((item) => (
          <img
            src={require(`../../assets/images/${item.path}`)}
            alt={item.title}
            classImage="img-thumbnail mx-1"
            key={item.image}
          />
        ))}
      </div>
  );
};

export default Photos;
