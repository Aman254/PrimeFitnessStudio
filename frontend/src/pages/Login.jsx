import React, { useState } from "react";
import image from "./../Assets/slidingImage/image7.jpg";
import Navbar from "../components/Navbar";
import { loginUser } from "../Services/api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };

      const response = await loginUser(userData);
      console.log(response);
      if (response.token) {
        localStorage.setItem("authToken", response.token);
        history("/exercises");
      } else {
        setError(response.message);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setError("Incorrect Email or Password");
      } else if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An Error Occured please try again");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="text-black w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="border border-yellow-400 p-8 rounded-lg  bg-white">
            <div className="w-full">
              <span className="md:text-4xl text-2xl font-medium ">Login</span>
            </div>
            <div className="w-full">
              <span className="">Hi, Welcome Back ✋</span>
            </div>
            <div className="mt-6">
              <span className=" font-medium">Email</span>
              <div className="  rounded-md">
                <input
                  type="email"
                  placeholder="Enter your Email..."
                  className="p-4 rounded-md focus:outline-none text-black font-medium font-poppins 
                  w-full shadow-xl "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/**Password Box */}
            <div className="mt-4">
              <span className="font-medium">Password</span>
              <div className="">
                <input
                  type="password"
                  placeholder="Enter your Password..."
                  className="p-4 shadow-xl rounded-md focus:outline-none text-black font-medium font-poppins w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <ul>
                <li>
                  <Link className="font-medium hover:text-gray-700 text-black transition-all">
                    Forgot Password?
                  </Link>
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-8">
                <button
                  className="bg-yellow-400 hover:bg-yellow-300 transition-all w-full 
              rounded-md p-4 text-black font-medium shadow-xl"
                >
                  Login
                </button>
              </div>
              {error && <div className="text-red-500 mt-4">{error}</div>}
            </form>
            <div className="w-full flex gap-1 mt-4">
              <div className="">Not registered yet? </div>
              <div className="font-semibold hover:text-gray-700 transition-all">
                <ul>
                  <li>
                    <Link to="/signup">Create an account</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
