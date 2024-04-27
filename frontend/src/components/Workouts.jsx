import React, { useEffect, useState } from "react";
import cImg1 from "../Assets/coursImages/coursImg1.jpg";
import { fetchExercises } from "../Services/api";
import { Link } from "react-router-dom";

const Workouts = () => {
  const [Exercise, setExercise] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchExercises();
      while (response.data.exercises.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response = await fetchExercises();
      }
      if (response.status === "Success") {
        setExercise(response.data.exercises);
      }
      console.log(response.data.exercises);
    };
    fetchData();
  }, []);

  // Data Importing Ends Here

  return (
    <div>
      {Exercise.map((exercise, index) => ({
        <div
          className="flex w-full border border-b-gray-400 shadow-xl
           mb-4 flex-wrap items-center justify-around p-2 hover:border-yellow-200 
           border-yellow-400 cursor-pointer transition-all"
          id={index}
        >
          <div className="flex flex-col w-1/4 flex-wrap">
            <span className="text-3xl font-semibold text-yellow-600">
              Incline Bench Press
            </span>
            <span className="flex gap-2 items-center">
              <span className="font-bold text-gray-900 text-xl">
                Equipment:
              </span>

              <span className=" font-medium text-gray-600"></span>
            </span>
            <span className="flex gap-2 items-center">
              <span className="font-bold text-gray-900 text-xl">
                Focus Area:
              </span>

              <span className=" font-medium text-gray-600"></span>
            </span>
          </div>
          <div className="w-1/4">
            <img
              src={cImg1}
              alt="jdgjh"
              className="min-h-40 max-w-80 max-h-40 min-w-80 rounded-lg"
            />
          </div>
          <div className="w-1/4">
            <button
              className="bg-yellow-400 rounded-lg shadow-lg p-4 px-10 font-semibold 
              hover:bg-yellow-200 transition-all"
            >
              <Link to="#">View Details</Link>
            </button>
          </div>
        </div>;
      }))}
    </div>
  );
};

export default Workouts;
