 
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
//import list from "../../public/list.json";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Cource() {
// API Call
const [book , setBook] = useState([])
useEffect(() =>{
  const getBook = async() => {
    try {
       const res= await axios.get("http://localhost:4001/book")
       console.log(res.data)
       setBook(res.data)
      
    } catch (error) {
      console.error("Error fetching books:", error);


  }
}
getBook();

  }, [])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 text-center items-center justify-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            sequi illum velit a tenetur alias expedita nesciunt, beatae cumque
            maiores. Officiis placeat impedit, maxime voluptatum hic cumque ipsa
            provident illum?
          </p>
         <Link to= "/">
         <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">back</button>
         </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item) => (
              <Cards item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </>
  );
}


export default Cource;
