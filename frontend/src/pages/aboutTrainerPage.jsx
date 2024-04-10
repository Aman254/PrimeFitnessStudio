import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import gymImg from "../Assets/gymImages/gymImg10.jpg";
const aboutTrainerPage = () => {
  return (
    <div className="md:flex flex-row w-full justify-between  items-center">
      <div className="p-2 m-2">
        <div className="w-full">
          <span className="text-4xl font-medium">Expert Trainers</span>
        </div>
        <div className="mt-2 text-xs text-yellow-100">
          <span>
            Certified professionals dedicated to optimizing your workouts.
          </span>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <CiCircleCheck className="text-yellow-400 text-4xl" />
            <span className=" text-lg">Customized Workouts Just for you.</span>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <CiCircleCheck className="text-yellow-400 text-4xl" />
            <span className=" text-lg">
              Knowledge in fitness , nutrition and anatomy.
            </span>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <CiCircleCheck className="text-yellow-400 text-4xl" />
            <span className=" text-lg">
              Motivates you to stick to your workout plans.
            </span>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <CiCircleCheck className="text-yellow-400 text-4xl " />
            <span className=" text-lg">safe and Effective exercises.</span>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <CiCircleCheck className="text-yellow-400 text-4xl " />
            <span className=" text-lg">
              Adjust your workout plans as your fitness level, improves.
            </span>
          </div>
        </div>
        <button
          className="mt-10  bg-yellow-400 hover:bg-yellow-200 text-black p-4
        rounded-lg font-bold md:text-xl text-base"
        >
          Talk in Person
        </button>
      </div>
      <div className="md:w-1/2 w-full md:mt-0 mt-6">
        <img src={gymImg} alt="Images" className=" object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default aboutTrainerPage;
