// import React from 'react';
import Hero from './Hero/Hero';
import PromotionSlider from './Hero/PromotionSlider';

const Homepage = () => {
    return (
        <div>
            <div className='container mx-auto px-4 py-8'>

            <Hero />
            </div>
            <PromotionSlider />
        </div>
    );
};

export default Homepage;