import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";

const Reviews = () => {
   const customerReviews = [
     {
       customerName: "Arafat",
       comment:
         "She is very professional and do a great job cleaning the house. I had guest the other day and she did a preety well job ,saved me at the last minutes. overall good quality work whenever i need help i can trust on her.",
       img: "https://i.ibb.co/wp511NH/young-handsome-man-listens-music-with-earphones.jpg",
       location: "Dhaka",
       id:1
     },

     {
       customerName: "Asma",
       img: "https://i.ibb.co/z5cm7Bz/portrait-happy-young-woman-looking-camera.jpg",
       comment:
         "She is very professional and do a great job cleaning the house. I had guest the other day and she did a preety well job ,saved me at the last minutes .overall good quality work whenever i need help i can trust on her.",
       location: "Dhaka",
       id:2
     },
     {
       customerName: "Salma",
       img: "https://i.ibb.co/Tqm0qgS/portrait-photo.jpg",
       comment:
         "She is very professional and do a great job cleaning the house. I had guest the other day and she did a preety well job ,saved me at the last minutes .overall good quality work whenever i need help i can trust on her.",
       location: "Dhaka",
       id:3
     },
   ];


   return (
     <div className="my-20 text-center bg-slate-100 p-5">
       <h1 className="mb-20 text-4xl font-bold">Happy Customer Happy Home</h1>
       <Swiper
         pagination={{
           clickable: true,
         }}
         grabCursor={true}
         loop={true}
         modules={[Pagination]}
         className="mySwiper"
         spaceBetween={50}
         slidesPerView={1}
       >
         {customerReviews.map((review) => (
           <SwiperSlide key={review.id}>
             <div>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                 fill="currentColor"
                 className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
               >
                 <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                 <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
               </svg>
               <h1 className="md:w-6/12 sm:w-9/12 mx-auto">{review.comment}</h1>
               <img
                 className="w-52 h-52 object-cover rounded-full mx-auto my-10"
                 src={review.img}
                 alt=""
               />
               <p className="mb-20">
                 <span className="text-cyan-600 font-bold">
                   {review.customerName}
                 </span>
                 , {review.location}
               </p>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                 fill="currentColor"
                 className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
               >
                 <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                 <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
               </svg>
             </div>
           </SwiperSlide>
         ))}
       </Swiper>
     </div>
   );
};

export default Reviews;