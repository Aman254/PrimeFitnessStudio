import React, { useEffect, useState, useMemo } from "react";
import { fetchExercises } from "../Services/api";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ExerciseBox from "../components/ExerciseBox";

//Importing Data from the API Backend
const Exercises = () => {
  const [Exercise, setExercise] = useState([]);
  useEffect(() => {
    fetchExercises()
      .then((response) => {
        setExercise(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // Data Importing Ends Here

  console.log(Exercise);

  /**Changing Messages */
  // const [index, setIndex] = useState(0);
  // const messages = useMemo(
  //   () => [
  //     ["Sweat it out with"],
  //     ["Unleash Your Potential with"],
  //     ["Forge a Stronger, Healthier You at"],
  //     ["Empower Your Fitness Evolution with"],
  //     ["Find Your Strength at"],
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [messages.length]);

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
                Sweat it out with
              </span>
            </div>

            <div className="mt-10">
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

          <div className="mt-8">
            <button
              className="border border-yellow-400 p-4 rounded-lg font-poppins font-normal 
            hover:border-yellow-200 transition-all"
            >
              Explore Exercises
            </button>
          </div>
        </div>
        <div className="">
          <Carousel />
        </div>
      </div>

      <div className="bg-white w-full h-screen">
        <div className="m-4 p-2">
          <div>{Exercise.length}</div>
          <ExerciseBox />
        </div>
      </div>
    </>
  );
};

export default Exercises;
