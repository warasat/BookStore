/* eslint-disable no-unused-vars */
import React from "react";


function Contact() {
  
  return (
    <>
      <div  className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-black">
        <div
          
          className="w-[600px] "
        >
          <div className="modal-box">
            <form  method="dialog">
              {/* if there is a button in form, it will close the modal */}
             
            

            {/* {Email} */}

            <h2 className="font-bold text-xl">Contact Us</h2>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 outline-none rounded-md border"
                
              />
              <br />
              
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 outline-none rounded-md border"
                
              />
               <br />
              
            </div>
            {/* {Password} */}

            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <input
                type="text"
                placeholder="Type your message"
                className="w-80 px-3 py-16 pt-2 outline-none rounded-md border"
                
              />
               
              
            </div>

            {/* {Button} */}
            <div className="flex  mt-4">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                Submit
              </button>
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
