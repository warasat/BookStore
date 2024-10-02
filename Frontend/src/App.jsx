// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './Home/Home';
import Courses from "./courses/Courses"
import { Route, Routes } from "react-router-dom"
import SignUp from './components/SignUp';
import Contacts from './Contact/Contacts';


function App() {
  return (
    <>
    
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/course" element= {<Courses/>}/>
      <Route path= "/signup" element= {<SignUp/>}/>
      <Route path= "/contact" element= {<Contacts/>}/>
    </Routes>
    
    

    </>
  )
}

export default App
