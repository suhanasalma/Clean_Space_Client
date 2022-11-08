import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";



export const AuthContext = createContext()
const auth = getAuth(app)


const SharedContext = ({children}) => {
   const [user,setUser] = useState('');

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currenUser=>{
      setUser(currenUser)

    })
    return ()=>{
      unsubscribe()
    }

   })


    const createUserWithEmail = (email,password) => {
      return createUserWithEmailAndPassword(auth,email,password)
    };

    const logInWithEmailPass = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
      return signOut(auth);
    }


   const allInfo = { createUserWithEmail, logInWithEmailPass, user, logOut };
   return (

     <div>
       <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
     </div>
   );
};

export default SharedContext;