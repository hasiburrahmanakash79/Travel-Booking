// import React from 'react';
import Hero from "./Hero/Hero";
import PromotionSlider from "./Hero/PromotionSlider";
import MostPopularHotels from "./MostPopularHotels.jsx/MostPopularHotels";

const Homepage = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-8">
        <Hero />
      </div>
      <PromotionSlider />
      <MostPopularHotels />
    </div>
  );
};

export default Homepage;
