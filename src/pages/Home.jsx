import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/cards/Cards";
import InfoBanner from "../components/InfoBanner";
import InfoCards from "../components/infocards/InfoCards";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cards />
      <InfoBanner />
      <InfoCards />
    </div>
  );
};

export default Home;
