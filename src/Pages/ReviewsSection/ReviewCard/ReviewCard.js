import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ item, handleDelete }) => {
  const { name, image, review, time, post, _id, email } = item;
  // console.log(item);

  // console.log(handleDelete);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://cleaning-server-two.vercel.app/services/${post}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="text-red-700">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={service.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service.name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{review}</td>
      <td>{time}</td>
      <th>
        <Link to={`/allcoments/${_id}`} service={service}>
          <button
            // onClick={() => handleEdit(_id)}
            className="btn btn-ghost btn-xs"
          >
            Edit
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ReviewCard;
