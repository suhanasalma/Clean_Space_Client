import React from 'react';
import Ingredients from './AboutIngredients/Ingredients';
import AboutMe from './AboutMe/AboutMe';
import Reviews from './CustomerReviews/Reviews';
import Service from './Serevice/Service';
import Slider from './Slider/Slider';

const Home = () => {
   return (
      <div>
         <Slider/>
         <Service/>
         <AboutMe/>
         <Reviews></Reviews>
         <Ingredients/>
      </div>
   );
};

export default Home;