import React, { useEffect, useState, useMemo } from "react";
import { fetchExercises } from "../Services/api";
import Navbar from "../components/Navbar";
import ExerciseBox from "../components/ExerciseBox";
import SearchBar from "../components/SearchBar";
import cImg1 from "../Assets/coursImages/coursImg1.jpg";

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

  return (
    <>
      <Navbar />
      <div>
        <div className="md:flex flex-row justify-between w-full items-center text-white h-full md:mt-0 mt-24">
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
            <img
              src={cImg1}
              alt=""
              className="h-screen md:min-w-[35rem] md:max-w-[38rem] w-full rounded-md"
            />
          </div>
        </div>
        <div className="bg-white">
          <div className="p-4 m-4 text-center">
            <span className="md:text-4xl text-2xl font-bold text-gray-900">
              Explore Workouts
            </span>
          </div>
          <div>
            <SearchBar />
          </div>
          <div>dkfjkfgkjgfn</div>
        </div>
      </div>
    </>
  );
};

export default Exercises;
