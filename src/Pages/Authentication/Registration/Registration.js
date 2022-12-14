import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../Assests/login/signup.png";
import useTitle from "../../../hooks/UseTitle";
import { AuthContext } from "../../../SharedContext/SharedContext";

const Registration = () => {
  useTitle("Registration");
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const { createUserWithEmail, updateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    console.log(name, email, password, image);
    createUser(email, password, name, image);
    //my navogate isn't working thats why i am doing this and for this problem i joined support session for many time but it doesn't work
    navigate(from, { replace: true });
    form.reset();
  };
  const createUser = (email, password, name, image) => {
    createUserWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        fetch("https://cleaning-server-two.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("clean-token", data.token);
            console.log(data);
          });
        updateProfileOfUser(name, image);
        // ...
      })
      .catch((error) => {
        console.error(error);
        // ..
      });
  };

  const updateProfileOfUser = (name, image) => {
    const profile = {
      displayName: name,
      photoURL: image,
    };
    updateUser(profile)
      .then(() => {
        // Profile updated!
        // ...
        console.log("updated");
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div className="flex justify-between lg:flex-row sm:flex-col sm:items-center">
      <img src={img} className="md:w-1/2" alt="" />
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 my-20">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block ">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md text-black"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block ">
              Image
            </label>
            <input
              type="text"
              name="Image"
              id="image"
              placeholder="Image"
              className="w-full px-4 py-3 rounded-md text-black"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md text-black"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md text-black"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-cyan-600">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-400 ">
          Already a Member?
          <Link to="/login">
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline text-gray-100 ml-3"
            >
              Sign In
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
