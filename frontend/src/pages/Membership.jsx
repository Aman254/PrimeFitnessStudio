import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import image from "./../Assets/slidingImage/image7.jpg";
import Footer from "../components/Footer";

const Membership = () => {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <Navbar />

      <div
        className="bg-cover bg-center w-full h-72"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex justify-center items-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Membership Plans</h1>
        </div>
      </div>

      <div className="md:flex flex-row justify-between items-center w-full text-white">
        <div className="p-2 m-2 md:w-1/2 w-full">
          <div className="border border-yellow-400 rounded-lg">
            <div className="p-2 m-4 text-center">
              <span className="md:text-2xl text-xl font-bold">
                Starting From
              </span>
            </div>

            <div className="">
              <span>1200/- </span>
            </div>
          </div>
        </div>

        {/**BOX -2 */}
        <div className="p-2 m-2 md:w-1/2 w-full">
          <div className="border border-yellow-400 rounded-lg"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Membership;
