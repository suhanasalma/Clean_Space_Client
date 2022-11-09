import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../SharedContext/SharedContext';
import ReviewCard from '../ReviewCard/ReviewCard';


const ReviewsByEmailId = () => {
   const [allReviews, setAllReview] = useState([])
   const {user} = useContext(AuthContext)
   
   useEffect(()=>{
      fetch(`http://localhost:5000/comments?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
         setAllReview(data)
      })
   },[user?.email])

   const handleDelete = (id) =>{
      console.log(id)
      const proceed = window.confirm('do you want to delete it?')
      if(proceed){
         fetch(`http://localhost:5000/comments/${id}`, {
         method: "DELETE",
         })
         .then(res=>res.json())
         .then(data=>{
            const remaingReview = allReviews.filter((item) => item._id !== id);
            setAllReview(remaingReview)
           })
      }
      

   }



   return (
     <div>
       {allReviews.length ? (
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
               {allReviews.map((item) => (
                 <ReviewCard
                   item={item}
                   handleDelete={handleDelete}
                   key={item._id}
                 ></ReviewCard>
               ))}
             </tbody>
           </table>
         </div>
       ) : (
         <div className="flex sm:flex-col lg:flex-row w-11/12  mx-auto justify-center items-center font-bold text-2xl h-screen text-cyan-600 text-center gap-10">
           <h1>
             No Reviews Found Looks Like You didn't Post Anything, Check Out{" "}
             <Link className=' hover:text-red-600' to="/services">service page</Link>
           </h1>
           <img src={user?.photoURL} alt="" />
         </div>
       )}
     </div>
   );
};

export default ReviewsByEmailId;