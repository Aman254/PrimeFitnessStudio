import React, { useEffect, useState } from "react";
import { fetchExercises } from "../Services/api";
import { Link } from "react-router-dom";
import plankGif from "../Assets/plank.gif";
import { useExercise } from "../Context/Exercisecontext";

const Workouts = () => {
  const [Exercise, setExercise] = useState([]);
  const { selectedBodyPart } = useExercise();
  console.log(selectedBodyPart);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetchExercises(selectedBodyPart);
        if (response.results === 0 || response.status !== "Sucess") {
          console.log("Error in Fectching Data ");
        } else {
          setExercise(response.data.exercises);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error While Fecthing Data", error);
    }
  }, [selectedBodyPart]);

  return (
    <div>
      {Exercise.map((exercise, index) => (
        <div
          className="flex w-full border rounded-lg shadow-xl
           mb-4 flex-wrap items-center justify-around p-2 hover:border-yellow-200 
           border-yellow-400 cursor-pointer transition-all"
          key={index}
        >
          <div className="flex flex-col w-1/4 flex-wrap">
            <span className="md:text-3xl text-xl font-semibold text-yellow-600">
              {exercise.name}
            </span>
            <div className="md:block hidden">
              <div className="flex gap-2 items-center w-full">
                <span className="font-bold text-gray-900 text-xl">
                  Equipment:
                </span>

                <span className=" font-medium text-gray-400">
                  {exercise.equipment}
                </span>
              </div>
            </div>
            <div className="md:block hidden">
              <span className="flex gap-2 items-center">
                <span className="font-bold text-gray-900 text-xl">
                  Focus Area:
                </span>

                <span className=" font-medium text-gray-400 overflow-hidden">
                  {exercise.focusArea}
                </span>
              </span>
            </div>
          </div>
          <div className="md:w-1/4 w-1/2">
            <Link to="/exercises/exercisemodal">
              <img
                src={plankGif}
                alt="jdgjh"
                className="min-h-40 max-w-60 max-h-40 min-w-60 rounded-lg overflow-hidden"
              />
            </Link>
          </div>
          <div className="w-1/4 md:block hidden">
            <button
              className="bg-yellow-400 rounded-lg shadow-lg md:px-4 px-10  md:p-2 p-4 font-semibold 
              hover:bg-yellow-200 transition-all"
              onClick={console.log(exercise.index)}
            >
              <Link to="/exercises/exercisemodal">View Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workouts;
