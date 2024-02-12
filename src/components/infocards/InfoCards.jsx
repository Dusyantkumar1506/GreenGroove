import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { GiFoodChain } from "react-icons/gi";
import InfoCard from "../infocards/inforCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      icon: <FaBowlFood size={30} />,
      title: "consectetur",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
      description2:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },

    {
      id: 2,
      icon: <SiIfood size={30} />,
      title: " adipisicing",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
      description2:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 3,
      icon: <MdOutlineEmojiFoodBeverage size={30} />,
      title: "reiciendis dolorum",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
      description2:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 4,
      icon: <MdFastfood size={30} />,
      title: "Zucchini Green",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
      description2:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 5,
      icon: <PiBowlFoodFill size={30} />,
      title: "Lorem ipsum",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
      description2:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
    {
      id: 6,
      icon: <GiFoodChain size={30} />,
      title: "officia quam",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
      description2:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi officia quam reiciendis dolorum atque?",
    },
  ];

  return (
    <div>
      <div className=" bg-[#e3e6e4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-16 px-8  pt-12 pb-12">
        {cardData.map((card) => (
          <InfoCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            description2={card.description2}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
