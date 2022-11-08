import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../SharedContext/SharedContext';
import ReviewCard from '../ReviewCard/ReviewCard';


const ReviewsByEmailId = () => {
   const [allReviews, setAllReview] = useState([])
   const {user} = useContext(AuthContext)

   useEffect(()=>{
      fetch(`http://localhost:5000/comments?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
         // console.log(data)
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
            console.log(data)
            const remaingReview = allReviews.filter((item) => item._id !== id);
            setAllReview(remaingReview)
           })
      }
      

   }



   return (
     <div>
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
               <ReviewCard item={item} handleDelete={handleDelete} key={item._id}></ReviewCard>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
};

export default ReviewsByEmailId;