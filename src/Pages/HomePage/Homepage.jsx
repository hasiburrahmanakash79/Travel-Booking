// import React from 'react';
import Achievements from "./Achievements/Achievements";
import GroupBooking from "./GroupBooking/GroupBooking";
import Hero from "./Hero/Hero";
import PromotionSlider from "./Hero/PromotionSlider";

const Homepage = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-8">
        <Hero />
      </div>
      <PromotionSlider />
      <GroupBooking />
      <Achievements />
    </div>
  );
};

export default Homepage;
