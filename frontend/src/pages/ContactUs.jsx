import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import contactImg from "./../Assets/contactImg.jpg";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className="bg-cover bg-center w-full h-72"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="flex justify-center items-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div
        className=" min-h-screen md:flex flex-row items-center justify-between md:m-4 md:p-4 p-2 m-2 
       gap-10 text-white"
      >
        <div className="border md:w-1/2 w-full bg-white shadow-sm rounded-lg h-[35rem] text-black">
          <div className="p-2 m-4">
            <span className="md:text-4xl text-2xl font-semibold">
              Let's Get In Touch
            </span>
          </div>
          <div className="m-4 p-2 gap-2">
            <div>
              <div>
                <span className="font-medium">Full Name</span>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="border w-full focus:outline-none focus:border-yellow-600 
              border-yellow-400 rounded-lg p-2 font-medium hover:border-yellow-500 "
              />
            </div>
            <div>
              <div className="mt-4">
                <span className="font-medium">Email</span>
              </div>
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="border w-full focus:outline-none focus:border-yellow-600 
              border-yellow-400 rounded-lg p-2 font-medium hover:border-yellow-500 "
              />
            </div>
            <div className="mt-4">
              <div>
                <span className="font-medium">Message</span>
              </div>
              <textarea
                type="text"
                value={message}
                placeholder="Enter Message in less than 200 words"
                className="border w-full focus:outline-none focus:border-yellow-600 border-yellow-400 rounded-lg p-2 font-medium hover:border-yellow-500 h-60"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="  text-white md:w-1/2 w-full md:mt-0 mt-8">
          <div className="">
            <MapComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
