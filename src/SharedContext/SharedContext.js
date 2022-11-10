import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";



export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const SharedContext = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading, setLoading] = useState(true)

  


    const createUserWithEmail = (email,password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
    };

    const logInWithEmailPass = (email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
      localStorage.removeItem("clean-token");
      setLoading(true);
      return signOut(auth);
    }

    const updateUser = (profile) =>{
      setLoading(true);
      return updateProfile(auth.currentUser,profile)
    }

    const googleLogIn = () =>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider)
    }


     useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currenUser) => {

        setUser(currenUser);
        setLoading(false);
       });
       return () => {
         unsubscribe();
       };
     });


   const allInfo = {
     createUserWithEmail,
     logInWithEmailPass,
     user,
     logOut,
     updateUser,
     googleLogIn,
     loading
   };
   return (

     <div>
       <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
     </div>
   );
};

export default SharedContext;