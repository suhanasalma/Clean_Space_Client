import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Reviews from '../ReviewsSection/Reviews';

const ServiceDetails = () => {
   const service = useLoaderData();
   const [review, setReview] = useState('')
   const { _id, img, name, description, price, ratings,features,benefits,reviews } = service;

   const addReview = (e) =>{
      e.preventDefault();
      console.log(e.target.review.value);
      setReview(e.target.review.value)
   }



   return (
     <div>
       <section>
         <div className="bg-slate-200">
           <div className="flex justify-around pt-5">
             <p className="text-3xl font-bold text-cyan-600">{price} $</p>
             <p>
               <span className="flex items-center gap-2 text-3xl font-bold text-cyan-600">
                 {ratings} <FaStar />
               </span>
             </p>
           </div>
           <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
             <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
               {name}
             </h1>
             <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
               {description}
             </p>
             <div className="flex justify-between text-start border p-3 w-full sm:flex-col xl:flex-row">
               <div className="xl:w-1/2">
                 <h1 className="my-5 text-4xl font-bold">How I Works:</h1>
                 {features.map((feature) => (
                   <li className="list-none mb-5">{feature}</li>
                 ))}
               </div>
               <div>
                 <h1 className="my-5 text-4xl font-bold">
                   Why you should take service
                 </h1>
                 {benefits.map((benfit) => (
                   <li className="list-none mb-5">{benfit}</li>
                 ))}
               </div>
             </div>
             <div className="flex flex-wrap justify-center mt-10">
               <button
                 type="button"
                 className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-600 text-white"
               >
                 Get started
               </button>
               <button
                 type="button"
                 className="px-8 py-3 m-2 text-lg border rounded border-cyan-600 text-cyan-600"
               >
                 Learn more
               </button>
             </div>
           </div>
         </div>
         <img
           src={img}
           alt=""
           className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
         />
       </section>
       <section className="my-20">
         <h1 className="text-center text-3xl font-medium text-cyan-600">
           Clients Review
         </h1>
         {reviews.map((review) => (
           <Reviews review={review}></Reviews>
         ))}
         <div className="text-center">
           <p className="text-2xl mb-5 font-bold">Add Review</p>
           <form action="" onSubmit={addReview}>
             <textarea
               className="border"
               name="review"
               id=""
               cols="60"
               rows="2"
             ></textarea>
             <div>
               <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-600 text-white">
                 Post
               </button>
             </div>
           </form>
         </div>
       </section>
     </div>
   );
};

export default ServiceDetails;