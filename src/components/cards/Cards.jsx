import React from "react";
import Card from "../cards/Card";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      imageUrl:
        "https://exoticvegetablespune.com/wp-content/uploads/2019/03/Baby-Spinach.jpg",
      title: "Healthy Baby Spinach 100gm",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },

    {
      id: 2,
      imageUrl:
        "https://exoticvegetablespune.com/wp-content/uploads/2019/03/avocado-1.jpg",
      title: "Avacado",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 3,
      imageUrl:
        "https://exoticvegetablespune.com/wp-content/uploads/2019/03/Cherry-Tomato-Red.jpg",
      title: "Tomato",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 4,
      imageUrl:
        "https://exoticvegetablespune.com/wp-content/uploads/2019/03/Zucchini-Green-300x300.jpg",
      title: "Zucchini Green",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 5,
      imageUrl:
        "https://exoticvegetablespune.com/wp-content/uploads/2019/03/Brocoli.jpg",
      title: "Broccoli",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 6,
      imageUrl:
        "https://exoticvegetablespune.com/wp-content/uploads/2019/03/corn2-e1557747812841-600x600.jpg",
      title: "Baby Corn",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
  ];

  return (
    <div>
      <div className=" bg-[#e3e6e4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-16 px-8  pt-12 pb-12">
        {cardData.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
