import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({item}) => {
   const {img,id,prev,next} = item;
   return (
     <div id={`slide${id}`} className="carousel-item relative w-full h-screen">
       <img src={img} className="w-full object-cover" />
       <div className="absolute flex justify-center items-center h-full w-full text-center">
         <div>
           <p className="text-xl text-white font-bold">
             Professional Cleaning Services
           </p>
           <div className="my-10">
             <p className="text-6xl text-white font-medium">
               So Fresh & So Clean...
             </p>
             <p className="text-6xl text-white font-medium">We Promise</p>
           </div>
           <Link to='/services'>
             <button className="border-2 px-6 py-2 text-white text-xl rounded-xl hover:bg-cyan-600 hover:text-white ease-in-out duration-700">
               All Services
             </button>
           </Link>
         </div>
       </div>
       <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
         <a
           href={`#slide${prev}`}
           className="btn btn-square bg-transparent border-cyan-700 hover:bg-cyan-600"
         >
           ❮
         </a>
         <a
           href={`#slide${next}`}
           className="btn btn-square bg-transparent border-cyan-700 hover:bg-cyan-600"
         >
           ❯
         </a>
       </div>
     </div>
   );
};

export default SliderItem;