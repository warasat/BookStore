/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from "../components/Navbar";
import Contact from '../components/Contact';
import Footer from "../components/Footer";

function Contacts() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>
   <Contact/>
   </div>
   
   <Footer/>
   </>
  )
}

export default Contacts
