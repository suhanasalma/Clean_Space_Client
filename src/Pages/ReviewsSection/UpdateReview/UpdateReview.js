import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/UseTitle";
import { AuthContext } from "../../../SharedContext/SharedContext";

const UpdateReview = () => {
  useTitle("Update Review");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const info = useLoaderData();
  //   console.log(info)
  const { _id, review, post } = info;
  //   console.log(_id)
  const [updateComment, setUpdateComment] = useState(info);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(updateComment);
    fetch(`https://cleaning-server-two.vercel.app/allcoments/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("updated success");
          navigate("/reviews");
        }
        console.log(data);
      });
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newComment = { ...updateComment };
    newComment[field] = value;
    setUpdateComment(newComment);
    // console.log(field,value)
  };

  return (
    <div className="my-20 text-xl">
      <h1 className="my-10 text-center text-2xl font-bold text-cyan-600">
        Update Your Comment and while updating please select recent time
      </h1>
      <p>Post Name: {}</p>
      <form
        onSubmit={handleUpdateUser}
        action=""
        className="flex flex-col w-6/12 mx-auto gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={user?.displayName}
          id=""
          readOnly
          className="border-2 p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue={user?.email}
          id=""
          readOnly
          className="border-2 p-2"
          required
        />
        <input
          type="text"
          name="image"
          defaultValue={user?.photoURL}
          placeholder="image"
          id=""
          readOnly
          className="border-2 p-2"
          required
        />
        <input
          type="text"
          name="post"
          defaultValue={post}
          placeholder="post id"
          id=""
          readOnly
          className="border-2 p-2"
          required
        />
        <textarea
          className="border p-2"
          name="review"
          id=""
          cols="60"
          rows="2"
          required
          onChange={handleChange}
          defaultValue={review}
        ></textarea>
        <input
          type="time"
          name="time"
          id=""
          required
          onChange={handleChange}
          className="border w-2/6 text-center"
        />
        <div className="text-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-600 text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
