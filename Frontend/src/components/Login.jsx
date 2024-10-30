/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider"; // Import useAuth

function Login() {
  const dialogRef = useRef(null);
  const [authUser, setAuthUser] = useAuth(); // Destructure setAuthUser from useAuth

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log("Response from server:", response.data);

      if (response.data) {
        toast.success("Login successfully");

        // Update the authUser state with the logged-in user data
        setAuthUser(response.data.user);
        localStorage.setItem("User", JSON.stringify(response.data.user));
        
        dialogRef.current.close(); // Close the dialog on successful login
      }
    } catch (err) {
      if (err.response) {
        console.log("Error response:", err.response);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error("Axios error:", err.message);
      }
    }
  };

  const closeDialog = () => {
    dialogRef.current.close(); // Close the dialog when ✕ is clicked
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" ref={dialogRef}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              type="button"
              onClick={closeDialog}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            {/* {Email} */}
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 outline-none rounded-md"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-red-500">required</span>}
            </div>

            {/* {Password} */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 outline-none rounded-md"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-red-500">required</span>}
            </div>

            {/* {Button} */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
