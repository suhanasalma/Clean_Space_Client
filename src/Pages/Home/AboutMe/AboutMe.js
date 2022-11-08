import React from 'react';
import cleaner from '../../../Assests/cleaner/1.jpg'
import cleaner2 from "../../../Assests/cleaner/2.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";

const AboutMe = () => {
   return (
     <div>
       <div className="border relative ">
         <img src={cleaner} className="w-full object-cover sm:hidden lg:block" alt="" />
         <img src={cleaner2} className="w-full object-cover lg:hidden" alt="" />
         <div className="lg:absolute top-1/4	p-5 lg:w-4/12">
           <h1 className="lg:text-5xl font-semibold mb-10 lg:text-white">
             About Me
           </h1>
           <p className="mb-5">
             Cleaning can be a chore and i know you have many choices when you
             consider hiring a service. Because of that, we are constantly
             thriving to improve our already high standards to have you see us
             as the absolute best in the industry. It’s not enough to have trust
             in the cleaning crew that you let into your home… you also have to
             trust that they will perform a first-class cleaning job for you.
           </p>
           <p className="lg:text-2xl lg:text-white font-semibold">
             I Provide:{" "}
           </p>
           <ul>
             <li className="flex items-center gap-2">
               <FaAngleDoubleRight className="text-cyan-600" />
               One-off, weekly or fotnightly
             </li>
             <li className="flex items-center gap-2">
               <FaAngleDoubleRight className="text-cyan-600" />
               Online booking and payment
             </li>
             <li className="flex items-center gap-2">
               <FaAngleDoubleRight className="text-cyan-600" />
               All cleaning materials and equipment
             </li>
             <li className="flex items-center gap-2">
               <FaAngleDoubleRight className="text-cyan-600" />
               100% satisfaction guarantee
             </li>
           </ul>
         </div>
       </div>
     </div>
   );
};

export default AboutMe;