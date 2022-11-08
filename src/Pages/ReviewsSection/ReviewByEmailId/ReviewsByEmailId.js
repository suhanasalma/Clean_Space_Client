import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../SharedContext/SharedContext';


const ReviewsByEmailId = () => {
   const [allReviews, setAllReviewa] = useState([])
   const {user} = useContext(AuthContext)

   useEffect(()=>{
      fetch(`http://localhost:5000/comments?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
         console.log(data)
      })
   },[])

   return (
      <div>
         
      </div>
   );
};

export default ReviewsByEmailId;