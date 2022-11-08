import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assests/logo/1.png'

const Header = () => {
   return (
     <div>
       <div className="navbar bg-slate-100 ">
         <div className="navbar-start">
           <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost lg:hidden">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M4 6h16M4 12h8m-8 6h16"
                 />
               </svg>
             </label>
             <ul
               tabIndex={0}
               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
             >
               <li>
                 <Link to="/home">Home</Link>
               </li>
               <li>
                 <Link to="/services">Services</Link>
               </li>
               <li>
                 <Link to="/blogs">Blogs</Link>
               </li>
             </ul>
           </div>
           <Link to="/" className=" text-center normal-case text-2xl">
             <div className="flex items-center">
               <img src={logo} className="w-10 h-10" alt="" />
               <div>
                 <p className="text-green-700">Clean Your</p>
                 <p className="text-sky-700">Space</p>
               </div>
             </div>
           </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="gap-4 menu-horizontal p-0">
             <li>
               <Link to="/home">Home</Link>
             </li>
             <li>
               <Link to="/services">Services</Link>
             </li>
             <li>
               <Link to="/blogs">Blogs</Link>
             </li>
           </ul>
         </div>
         <div className="navbar-end">
           <div>
             <button>sign in</button>
           </div>
           {/* <div className="dropdown dropdown-end">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
                 <img src="https://placeimg.com/80/80/people" />
               </div>
             </label>
             <ul
               tabIndex={0}
               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
             >
               <li>
                 <a className="justify-between">
                   Profile
                   <span className="badge">New</span>
                 </a>
               </li>
               <li>
                 <a>Settings</a>
               </li>
               <li>
                 <a>Logout</a>
               </li>
             </ul>
           </div> */}
         </div>
       </div>
     </div>
   );
};

export default Header;