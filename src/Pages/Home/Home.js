import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Service from './Serevice/Service';
import Slider from './Slider/Slider';

const Home = () => {
   return (
      <div>
         <Slider/>
         <Service/>
         <AboutMe/>
      </div>
   );
};

export default Home;