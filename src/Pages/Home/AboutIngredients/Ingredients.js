import React from 'react';
import img1 from '../../../Assests/img/1.jpg'
import img2 from '../../../Assests/img/2.jpg'
import { FaAngleDoubleRight } from "react-icons/fa";

const Ingredients = () => {
   return (
     <section className="dark:bg-gray-800 dark:text-gray-100">
       <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
         <div>
           <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
             I Belive in Good Quality
           </h2>
           <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
             it can be customer service or ingredients to use for cleaning .
           </p>
         </div>
         <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
           <div>
             <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
               Reasons to Choose Me
             </h3>
             <p className="mt-3 text-lg dark:text-gray-400">
               I always make sure to use natural or harmless chemical for my
               work
             </p>
             <div className="mt-12 space-y-12">
               <div className="flex">
                 <div className="flex-shrink-0">
                   <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       className="w-7 h-7"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M5 13l4 4L19 7"
                       ></path>
                     </svg>
                   </div>
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                     Top-Rated Service
                   </h4>
                   <p className="mt-2 dark:text-gray-400">
                     Hold a successful track record of satisfying our customers
                     and getting back their bond money.
                   </p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0">
                   <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       className="w-7 h-7"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M5 13l4 4L19 7"
                       ></path>
                     </svg>
                   </div>
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                     Superior Quality
                   </h4>
                   <p className="mt-2 dark:text-gray-400">
                     Use the most excellent quality tools and equipment to get
                     all the dust and dirt out of your premises.
                   </p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0">
                   <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       className="w-7 h-7"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M5 13l4 4L19 7"
                       ></path>
                     </svg>
                   </div>
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                     Eco-Friendly Products
                   </h4>
                   <p className="mt-2 dark:text-gray-400">
                     Use biodegradable products which do not harm the
                     environment, pets or humans in any way.
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <div aria-hidden="true" className="mt-10 lg:mt-0">
             <img
               src={img2}
               alt=""
               className="mx-auto rounded-lg shadow-lg w-96 dark:bg-gray-500"
             />
           </div>
         </div>
         <div>
           <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
             <div className="lg:col-start-2">
               <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                 Natural Cleaning Products
               </h3>
               <p className="mt-3 text-lg dark:text-gray-400">
                 I feel good about cleaning with my self-formulated, natural
                 products that are better for the environment
               </p>
               <div className="mt-12 space-y-12">
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         className="w-7 h-7"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 13l4 4L19 7"
                         ></path>
                       </svg>
                     </div>
                   </div>
                   <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                       100% Safe & Organic
                     </h4>
                     <p className="mt-2 dark:text-gray-400">
                       I combine high concentrates of pure organic essential
                       oils with quality plant-derived ingredients.
                     </p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         className="w-7 h-7"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 13l4 4L19 7"
                         ></path>
                       </svg>
                     </div>
                   </div>
                   <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                       I Care About The Earth
                     </h4>
                     <p className="mt-2 dark:text-gray-400">
                       All of our packaging, bottles, cleaning equipment, even
                       our uniforms come from recycled, fairtrade or low impact
                       origins.
                     </p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         className="w-7 h-7"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 13l4 4L19 7"
                         ></path>
                       </svg>
                     </div>
                   </div>
                   <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                       All cleaning materials and equipment
                     </h4>
                     <p className="mt-2 dark:text-gray-400">
                       I sanitize those tools after every cleaning
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 w-96">
               <img
                 src={img1}
                 alt=""
                 className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
               />
             </div>
           </div>
         </div>
       </div>
     </section>
   );
};

export default Ingredients;