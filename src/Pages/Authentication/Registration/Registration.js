import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../Assests/login/signup.png";

const Registration = () => {
   return (
     <div className="flex">
       <img src={img} className="" alt="" />
       <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 my-20">
         <h1 className="text-2xl font-bold text-center">Sign Up</h1>
         <form
           novalidate=""
           action=""
           className="space-y-6 ng-untouched ng-pristine ng-valid"
         >
           <div className="space-y-1 text-sm">
             <label for="username" className="block dark:text-gray-400">
               Username
             </label>
             <input
               type="text"
               name="username"
               id="username"
               placeholder="Username"
               className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
             />
           </div>
           <div className="space-y-1 text-sm">
             <label for="username" className="block dark:text-gray-400">
               Image
             </label>
             <input
               type="text"
               name="Image"
               id="image"
               placeholder="Image"
               className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
             />
           </div>
           <div className="space-y-1 text-sm">
             <label for="username" className="block dark:text-gray-400">
               Email
             </label>
             <input
               type="email"
               name="email"
               id="email"
               placeholder="email"
               className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
             />
           </div>
           <div className="space-y-1 text-sm">
             <label for="password" className="block dark:text-gray-400">
               Password
             </label>
             <input
               type="password"
               name="password"
               id="password"
               placeholder="Password"
               className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
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