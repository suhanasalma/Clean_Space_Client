import React from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
      const { img, name, description } = service;
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
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 hover:bg-cyan-600 hover:text-white"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;