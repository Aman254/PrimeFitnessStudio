import React, { useEffect, useState } from "react";
import { fetchExercises } from "../Services/api";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { FaArrowRight } from "react-icons/fa";

const Exercises = () => {
  const [Exercise, setExercise] = useState([]);
  useEffect(() => {
    fetchExercises()
      .then((response) => {
        setExercise(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [index, setIndex] = useState(0);
  const messages = [
    "Sweat it out with",
    "Unleash Your Potential with",
    "Forge a Stronger, Healthier You at",
    "Empower Your Fitness Evolution with",
    "Find Your Strength at",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  //   console.log(Exercise);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex flex-row justify-between w-full items-center text-white h-screen md:mt-0 mt-24">
        <div className="p-8 md:w-1/2 w-full">
          <h1 className="">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold font-oswald md:text-6xl text-4xl">
                {messages[index]}
              </span>
            </div>

            <div className="mt-6">
              <span className="font-bold font-oswald md:text-6xl text-4xl">
                Prime Fitness Studio
              </span>
            </div>
          </h1>

          <div className="mt-4">
            <span>
              Checkout the most Effective exercise personalized for you
            </span>
          </div>
        </div>
        <div className="">
          <Carousel />
        </div>
      </div>

      <div className="bg-white w-full h-screen"></div>
    </>
  );
};

export default Exercises;
