import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Reviews from "../ReviewsSection/Reviews";
import { AuthContext } from "../../SharedContext/SharedContext";
import MyReviews from "../ReviewsSection/MyReviews/MyReviews";
import useTitle from "../../hooks/UseTitle";
import { toast } from "react-toastify";
//  import { ToastContainer, toast } from "react-toastify";
//  import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  useTitle("Service Details");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  // console.log(service)
  const [review, setReview] = useState({});
  const [mongoReview, setMongoReview] = useState([]);
  const {
    _id,
    img,
    name,
    description,
    price,
    ratings,
    features,
    benefits,
    reviews,
  } = service;

  const addReview = (e) => {
    e.preventDefault();
    fetch("https://cleaning-server-two.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Review Posted");
        }
        console.log(data);
      });
  };

  const handleOnBlur = (e) => {
    const form = e.target;
    const value = form.value;
    const field = form.name;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  useEffect(() => {
    fetch(`https://cleaning-server-two.vercel.app/comments?post=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMongoReview(data);
      });
  }, [_id, mongoReview]);

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
                {features?.split(",").map((feature) => (
                  <li className="list-none mb-5">{feature}</li>
                ))}
              </div>
              <div>
                <h1 className="my-5 text-4xl font-bold">
                  Why you should take service
                </h1>
                {benefits?.split(",").map((benfit) => (
                  <li className="list-none mb-5">{benfit}</li>
                ))}
              </div>
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
        {reviews?.length ? (
          <h1 className="text-center text-3xl font-medium text-cyan-600">
            Clients Review
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-medium text-cyan-600 mb-10">
            No Reviews Available
          </h1>
        )}
        {user?.uid &&
          mongoReview?.map((item) => <MyReviews item={item}></MyReviews>)}
        {reviews?.map((review) => (
          <Reviews review={review}></Reviews>
        ))}
        {user?.uid ? (
          <div className="text-center">
            <p className="text-2xl mb-5 font-bold">Add Review</p>
            <form
              action=""
              onSubmit={addReview}
              className="flex flex-col w-6/12 mx-auto gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user?.displayName}
                id=""
                className="border-2 p-2"
                onBlur={handleOnBlur}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user?.email}
                id=""
                className="border-2 p-2"
                onBlur={handleOnBlur}
                required
              />
              <input
                type="text"
                name="image"
                defaultValue={user?.photoURL}
                placeholder="image"
                id=""
                className="border-2 p-2"
                onBlur={handleOnBlur}
                required
              />
              <input
                type="text"
                name="post"
                defaultValue={_id}
                placeholder="post id"
                id=""
                readOnly
                className="border-2 p-2"
                onBlur={handleOnBlur}
                required
              />
              <textarea
                className="border p-2"
                name="review"
                id=""
                cols="60"
                rows="2"
                required
                placeholder="Comment"
                onBlur={handleOnBlur}
              ></textarea>
              <input
                type="time"
                name="time"
                id=""
                required
                className="border w-1/6 text-center"
                onBlur={handleOnBlur}
              />
              <div>
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-600 text-white">
                  Post
                </button>
              </div>
            </form>
          </div>
        ) : (
          <h1 className="text-3xl font-bold text-center">
            Please{" "}
            <Link to="/login" className="text-cyan-600">
              Login
            </Link>{" "}
            to Post Your Reviews
          </h1>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;
