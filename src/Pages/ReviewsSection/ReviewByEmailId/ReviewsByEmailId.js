import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/UseTitle";
import { AuthContext } from "../../../SharedContext/SharedContext";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewsByEmailId = () => {
  useTitle("My Reviews");
  const [allReviews, setAllReview] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(
      `https://cleaning-server-two.vercel.app/comments?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllReview(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("do you want to delete it?");
    if (proceed) {
      fetch(`https://cleaning-server-two.vercel.app/comments/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("successfully deleted");
          }
          const remaingReview = allReviews.filter((item) => item._id !== id);
          setAllReview(remaingReview);
        });
    }
  };

  const handleEdit = (review) => {
    <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold leading-tight tracking-wide">
        {review.name}
      </h2>
      <p className="flex-1 dark:text-gray-400">{review.review}</p>
      <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
        <button className="px-6 py-2 rounded-sm">Cancel</button>
        <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-400 dark:text-gray-900">
          Agree
        </button>
      </div>
    </div>;
    console.log(review);
  };

  return (
    <div>
      {allReviews?.length ? (
        <div className="overflow-x-auto w-full my-20">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Delete</th>
                <th>Service</th>
                <th>Name</th>
                <th>Review</th>
                <th>Time</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {allReviews?.map((item) => (
                <ReviewCard
                  item={item}
                  handleDelete={handleDelete}
                  key={item._id}
                  handleEdit={handleEdit}
                ></ReviewCard>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex sm:flex-col lg:flex-row w-11/12  mx-auto justify-center items-center font-bold text-2xl h-screen text-cyan-600 text-center gap-10">
          <h1>
            No Reviews Found Looks Like You didn't Post Anything, Check Out{" "}
            <Link className=" hover:text-red-600" to="/services">
              service page
            </Link>
          </h1>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default ReviewsByEmailId;
