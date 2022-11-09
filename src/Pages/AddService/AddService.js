import React, { useState } from "react";
import useTitle from "../../hooks/UseTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const [service, setService] = useState({});
  useTitle("Add Service");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // posting service in server side
    fetch("https://cleaning-server-suhanasalma.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("successfully added");
          e.target.reset()
        }
      });
  };

  //collecting all input field value

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-20">Add Services</h1>
      <form
        onSubmit={handleOnSubmit}
        action=""
        className="flex flex-col gap-10 w-6/12 mx-auto mb-20"
      >
        <label htmlFor="name">Service Name</label>
        <input
          type="text"
          name="name"
          className="border-2 p-2"
          placeholder="service name"
          id=""
          onChange={handleInput}
        />
        <label htmlFor="img">Image</label>
        <input
          type="text"
          name="img"
          className="border-2 p-2"
          placeholder="service img"
          id=""
          onChange={handleInput}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          className="border-2 p-2"
          placeholder="service price"
          id=""
          onChange={handleInput}
        />
        <label htmlFor="ratings">Ratings</label>
        <input
          type="text"
          name="ratings"
          className="border-2 p-2"
          placeholder="ratings"
          id=""
          onChange={handleInput}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          placeholder="service details"
          cols="60"
          className="border-2 p-2"
          rows="4"
          onChange={handleInput}
        />

        {/* please try to add like shown in example else code won't work */}
        <label htmlFor="features">Features</label>
        <textarea
          name="features"
          id=""
          placeholder="service feature ex: 1. POWER WASHING,2. GUTTER CLEANING"
          cols="60"
          className="border-2 p-2"
          rows="4"
          onChange={handleInput}
        />

        {/* please try to add like shown in example else code won't work */}
        <label htmlFor="benefits">Benefits</label>
        <textarea
          name="benefits"
          id=""
          placeholder="service benefits ex: 1. Extend Your Windows’ Life,2. Enhance Your Windows’ Efficiency"
          cols="60"
          className="border-2 p-2"
          rows="4"
          onChange={handleInput}
        />
        <button className="border p-2 bg-cyan-600 text-white text-xl font-bold">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddService;
