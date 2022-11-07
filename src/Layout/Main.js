import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPages/Header/Header'
import Footer from '../Pages/SharedPages/Footer/Footer'


const Main = () => {
   return (
     <div className="max-w-screen-xl mx-auto">
       <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
     </div>
   );
};

export default Main;