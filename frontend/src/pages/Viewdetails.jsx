import React, { useEffect, useState } from "react";
import { fetchExercises } from "../Services/api";
import Navbar from "../components/Navbar";

const Viewdetails = () => {
  return (
    <>
      <Navbar />
      <div className="md:flex flex-row justify-between  text-white p-2 mt-32">
        <div className="md:w-1/2 w-full p-2 m-2 md:mt-0 mt-20">
          <iframe
            src="https://www.youtube.com/embed/21m3MOvVy1Q?si=cucEG14W6-MpznGK"
            title="Name"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded-lg shadow-lg md:h-[30rem] h-[20rem] w-full"
          ></iframe>
        </div>

        <div className="md:w-1/2 w-full p-2 m-2">
          <div className="flex flex-col p-2">
            <span className="font-bold text-4xl text-yellow-400 p-2">
              Plank
            </span>
            <div className="flex items-center gap-2">
              <span className="p-2 font-semibold md:text-2xl text-[25px] text-yellow-400">
                Focus Area:
              </span>
              <span className="md:text-xl text-[15px] font-oswald">
                Abs, Shoulders, Back
              </span>
            </div>
            <span className="flex items-center gap-2">
              <span className="p-2 font-semibold md:text-2xl text-[25px] text-yellow-400">
                Equipment:
              </span>
              <span className="md:text-xl text-[12px] font-oswald w-full">
                Wheel Roller, BodyWeight
              </span>
            </span>
            <div className="flex flex-col ">
              <span className="font-bold text-4xl text-yellow-400 p-2">
                Execution:
              </span>
              <div className="flex flex-col w-full p-2 items-center md:gap-2 gap-6 md:text-[20px] text[15px]">
                <span className="">
                  Stand with your feet shoulder-width apart, holding a medicine
                  ball at chest level.
                </span>
                <span>
                  Stand with your feet shoulder-width apart, holding a medicine
                  ball at chest level.
                </span>
                <span>
                  Stand with your feet shoulder-width apart, holding a medicine
                  ball at chest level.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewdetails;
