import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
      const { _id, img, name, description, price, ratings } = service;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <PhotoProvider>
        <PhotoView>
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
        </PhotoView>
      </PhotoProvider>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-100">{description.slice(0, 100)}...</p>
          <p className="flex justify-between font-bold text-cyan-600 text-xl">
            {price} ${" "}
            <span className="flex items-center gap-2">
              {ratings} <FaStar />
            </span>
          </p>
        </div>
        <Link to={`/services/${_id}`}>
          <button
            type="button"
            className="  flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 bg-slate-100 hover:bg-cyan-600 hover:text-white ease-in-out duration-700"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;