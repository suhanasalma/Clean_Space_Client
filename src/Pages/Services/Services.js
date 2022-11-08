import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
  // const {services,count} = useLoaderData()

  //count: 8;
  //perpage: 3
  //page: 8/3;
  const [services,setServices] = useState([])
  const [count,setCount] = useState(0)
  const [page,setPage] = useState(0);
  const [size,setSize] = useState(3);


  useEffect(()=>{
    fetch(`http://localhost:5000/services?page=${page}&size=${size} `)
    .then(res=>res.json())
    .then(data=>{
      setCount(data.count)
      setServices(data.services)
    })

  },[page,size])

  const pages = Math.ceil(count / size);
  console.log(pages)
  

   return (
     <div className="my-20">
       <h1 className="text-5xl font-bold text-center mb-10">Our Services</h1>
       <p className="lg:w-6/12 mx-auto text-center mb-20">
         At Cleaning Company Team, our highly trained, experienced, and skilled
         cleaning specialists offer thorough and organized cleaning services for
         clients across Dhaka.
       </p>
       <div className="grid grid-cols-3 gap-10">
         {services.map((service) => (
           <ServiceCard service={service} key={service._id}></ServiceCard>
         ))}
       </div>
       <h1>current page: {page}</h1>
       <div className="flex justify-center space-x-1 dark:text-gray-100 my-20">
         {[...Array(pages).keys()].map((number) => (
           <button
             key={number}
             type="button"
             title="Page 1"
             className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
             onClick={() => setPage(number)}
           >
             {number + 1}
           </button>
         ))}
       </div>
     </div>
   );
};

export default Services;