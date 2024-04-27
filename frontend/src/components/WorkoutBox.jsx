import React from "react";
import contactImg from "../Assets/contactImg.jpg";

const WorkoutBox = () => {
  return (
    <>
      <div
        className="md:flex flex-row justify-between items-center w-screen border rounded-lg shadow-xl 
      gap-40 md:hover:border-yellow-400"
      >
        {/**First Div Main */}
        <div className="flex flex-col justify-between w-full p-2 m-4">
          <span className="text-2xl text-gray-900 font-bold">
            Incline Bench Press
          </span>
          <div>
            <span className="font-semibold text-xl text-gray-800">
              Equipment:
            </span>
            <span className="text-gray-600 font-bold">
              {" "}
              Barbell , Bench, gym
            </span>
          </div>
          <div className="md:w-full w-full">
            <span className="text-xl font-semibold text-gray-800">
              Primary Muscles:
            </span>
            <span className="text-gray-600 font-bold">
              {"  "}
              Chest
            </span>
          </div>
        </div>
        {/**First Div Main Ends Here */}

        {/**Image Div starts here second Div*/}
        <div className="w-full md:p-4 md:m-2 p-2">
          <img
            src={contactImg}
            alt=""
            className="rounded-lg md:max-w-40 w-full md:max-h-32 max-h-34"
          />
        </div>
        <div className="w-screen p-2">
          <button
            className="md:bg-yellow-300 bg-yellow-300 rounded-lg p-4 text-xl font-semibold text-gray-900 
          md:hover:bg-yellow-200 transition-all w-full"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkoutBox;
