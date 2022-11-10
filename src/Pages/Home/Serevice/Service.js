import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Services/ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const page = 0;
  const size = 3;
  useEffect(() => {
    fetch(`http://localhost:5000/services?page=${page}&size=${size} `)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        // console.log(data);
      });
  }, [page, size]);
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl mb-5 font-semibold">
          Cleaning Services that are Provided
        </h1>
        <p className=" md:w-6/12 mx-auto">
          Let me use my years of experience, skilled, and advanced procedures to
          ensure a clean and healthy environment for your employees, customers
          and guests.
        </p>
      </div>
      <div className="flex sm:flex-col lg:flex-row justify-center items-center gap-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          <button className="border-2 my-20 px-6 py-3 font-medium text-xl hover:bg-cyan-600 hover:text-white  bg-slate-100 hover:bg-cyan-600 hover:text-white ease-in-out duration-700">
            See All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
