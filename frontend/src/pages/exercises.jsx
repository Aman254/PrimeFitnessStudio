import React, { useEffect, useState } from "react";
import { fetchExercises } from "../Services/api";
import Navbar from "../components/Navbar";
import image from "../Assets/gymImages/gymImg4.jpg";
const Exercises = () => {
  const [Exercise, setExercise] = useState([]);
  useEffect(() => {
    fetchExercises()
      .then((response) => {
        setExercise(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //   console.log(Exercise);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div
        className="md:flex flex-row justify-between w-full items-center text-white h-screen 
      md:mt-0 mt-40 gap-40"
      >
        <div className="md:w-1/2 w-full">
          <div className="md:p-4 p-2">
            <span className="text-xl font-poppins font-medium text-yellow-400">
              Prime Fitness Studio
            </span>
          </div>
          <div className="p-4">
            <h1 className="text-6xl font-oswald font">
              Sweat, Smile and Repeat
            </h1>
          </div>
          <div className="p-2">
            <span>
              Checkout the most Effective exercise personalized for you
            </span>
          </div>
        </div>
        <div className="">
          <img src={image} alt="" className="md:h-screen h-1/2" />
        </div>
      </div>

      <div className="bg-white w-full h-screen"></div>
    </>
  );
};

export default Exercises;
