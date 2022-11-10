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
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`http://localhost:5000/comments?email=${user?.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("clean-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setAllReview(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("do you want to delete it?");
    if (proceed) {
      fetch(`http://localhost:5000/comments/${id}`, {
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

  // const handleEdit = (id) => {

  //     fetch(`http://localhost:5000//${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setComment(data));

  //   // console.log(review);
  // };

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
                  // handleEdit={handleEdit}
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
