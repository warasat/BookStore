/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './Home/Home';
import Courses from "./courses/Courses"
import { Navigate,Route, Routes } from "react-router-dom"
import SignUp from './components/SignUp';
import Contacts from './Contact/Contacts';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser] =useAuth();
  console.log(authUser);
  return (
    <>
    
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/course" element= {authUser?<Courses/>:<Navigate to= "/signup" />}/>
      <Route path= "/signup" element= {<SignUp/>}/>
      <Route path= "/contact" element= {<Contacts/>}/>
    </Routes>
    <Toaster />
    

    </>
  )
}

export default App
