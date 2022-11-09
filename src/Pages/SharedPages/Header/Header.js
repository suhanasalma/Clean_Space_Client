import React, { useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import logo from '../../../Assests/logo/1.png'
import { AuthContext } from '../../../SharedContext/SharedContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate =useNavigate()


  const signOut = () =>{
    logOut()
      .then(() => {
        navigate('/')
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
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
               <li className="font-bold">
                 <Link to="/home">Home</Link>
               </li>
               <li className="font-bold text-lg">
                 <Link to="/services">Services</Link>
               </li>
               <li className="font-bold text-lg">
                 <Link to="/blogs">Blogs</Link>
               </li>
               <li className="font-bold text-lg">
                 <Link to="/addservice">Add Service</Link>
               </li>
               {user?.uid && (
                 <li className="font-bold text-lg">
                   <Link to="/reviews">My Reviews</Link>
                 </li>
               )}
             </ul>
           </div>
           <Link to="/" className=" text-center normal-case text-2xl">
             <div className="flex items-center">
               <img src={logo} className="w-10 h-10" alt="" />
               <p className="text-green-700">Clean Space</p>
             </div>
           </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="gap-4 menu-horizontal p-0">
             <li>
               <Link className="font-bold text-lg" to="/home">
                 Home
               </Link>
             </li>
             <li className="font-bold text-lg">
               <Link to="/services">Services</Link>
             </li>
             <li className="font-bold text-lg">
               <Link to="/blogs">Blogs</Link>
             </li>
             <li className="font-bold text-lg">
               <Link to="/addservice">Add Service</Link>
             </li>
             {user?.uid && (
               <li className="font-bold text-lg">
                 <Link to="/reviews">My Reviews</Link>
               </li>
             )}
           </ul>
         </div>
         <div className="navbar-end">
           {user?.uid ? (
             <div className="dropdown dropdown-end">
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                 <div className="w-10 rounded-full">
                   <img src={user?.photoURL} alt='user'/>
                 </div>
               </label>
               <ul
                 tabIndex={0}
                 className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
               >
                 <li>
                   <Link to="/profile" className="justify-between">
                     Profile
                     <span className="badge">New</span>
                   </Link>
                 </li>
                 <li onClick={signOut}>
                   <p>Logout</p>
                 </li>
               </ul>
             </div>
           ) : (
             <div>
               <Link to="/register" className="mr-3">
                 <button className="lg:inline sm:hidden px-4 py-2 m-2 text-lg font-semibold rounded bg-cyan-600 text-white">
                   Sign Up
                 </button>
               </Link>
               <Link to="/login">
                 <button className="px-4 py-2 m-2 text-lg font-semibold rounded bg-cyan-600 text-white">
                   Log In
                 </button>
               </Link>
             </div>
           )}
         </div>
       </div>
     </div>
   );
};

export default Header;