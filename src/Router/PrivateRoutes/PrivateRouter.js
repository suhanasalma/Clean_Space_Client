import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../SharedContext/SharedContext';

const PrivateRouter = ({children}) => {
   const { user, loading } = useContext(AuthContext);
   let location = useLocation()
   if(loading){
      return (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto my-10"></div>
      );
   }
   if(user){
      return children
   }
   return <Navigate to="/login" state={{ from: location }} replace />

};

export default PrivateRouter;