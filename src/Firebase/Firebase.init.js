// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyDFrWtI62g8HR2kPfXPbS0XnR-jFkTSm80",
  // authDomain: "cleaning-company-f8678.firebaseapp.com",
  // projectId: "cleaning-company-f8678",
  // storageBucket: "cleaning-company-f8678.appspot.com",
  // messagingSenderId: "867807173025",
  // appId: "1:867807173025:web:28282a6f6f7fc5c3d993e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;