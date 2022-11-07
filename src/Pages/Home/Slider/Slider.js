import React from 'react';
import img1 from '../../../Assests/Carosoul/1.jpg'
import img2 from '../../../Assests/Carosoul/2.jpg'
import img3 from '../../../Assests/Carosoul/3.jpg'
import SliderItem from './SliderItem';

const Slider = () => {
   const sliderItem = [
      {
         id:1,
         img:img1,
         prev:3,
         next:2,

      },
      {
         id:2,
         img:img2,
         prev:1,
         next:3,

      },
      {
         id:3,
         img:img3,
         prev:2,
         next:1,

      },
   ]
   return (
     <div>
       <div className="carousel w-full">
         {
            sliderItem.map(item=><SliderItem item={item}></SliderItem>)
         }
       </div>
     </div>
   );
};

export default Slider;