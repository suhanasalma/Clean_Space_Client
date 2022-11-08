import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';


const Service = () => {
   const [services,setServices] = useState([])
   useEffect(()=>{
      fetch("http://localhost:5000/services")
      .then(res=>res.json())
      .then(data=>{
         setServices(data)
         console.log(data)
      })
   },[])
   return (
     <div className="my-20">
       <div className="text-center mb-10">
         <h1 className="text-4xl mb-5 font-semibold">
           Cleaning Services that are Provided
         </h1>
         <p className="w-6/12 mx-auto">
           Let me use my years of experience, skilled, and advanced procedures
           to ensure a clean and healthy environment for your employees,
           customers and guests.
         </p>
       </div>
       <div className="flex justify-center items-center gap-10">
         {services.map((service) => (
           <ServiceCard key={service._id} service={service}></ServiceCard>
         ))}
       </div>
       <div className="text-center">
         <button className="border-2 my-20 px-6 py-3 font-medium text-xl hover:bg-cyan-600 hover:text-white">
           See All Services
         </button>
       </div>
     </div>
   );
};

export default Service;