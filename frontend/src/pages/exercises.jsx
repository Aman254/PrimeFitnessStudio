import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bodypart from "../components/Bodypartbox";
import cImg1 from "../Assets/coursImages/coursImg1.jpg";
import chestImg from "./../Assets/bodyPartImages/body-part-chest.png";
import absImg from "./../Assets/bodyPartImages/body-part-abs.png";
import armsImg from "./../Assets/bodyPartImages/body-part-arms.png";
import backImg from "./../Assets/bodyPartImages/body-part-back.png";
import legsImg from "./../Assets/bodyPartImages/body-part-legs.png";
import shoulderImg from "./../Assets/bodyPartImages/body-part-shoulders.png";
import WorkoutBox from "../components/WorkoutBox";
import Workouts from "../components/Workouts";

//Importing Data from the API Backend
const Exercises = () => {
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

        <div className="bg-white ">
          <div className="text-center p-2 m-2">
            <span className=" md:text-4xl text-2xl font-semibold">
              Explore Workouts
            </span>
          </div>
          {/**BodyPart Images */}
          <div className="flex w-full max-h-26 items-center flex-wrap justify-around">
            <div>
              <Bodypart Bodypart={"Abs"} Img={absImg} />
            </div>
            <div>
              <Bodypart Bodypart={"Arms"} Img={armsImg} />
            </div>
            <div>
              <Bodypart Bodypart={"Back"} Img={backImg} />
            </div>
            <div>
              <Bodypart Bodypart={"Chest"} Img={chestImg} />
            </div>

            <div>
              <Bodypart Bodypart={"Shoulders"} Img={shoulderImg} />
            </div>
            <div>
              <Bodypart Bodypart={"Legs"} Img={legsImg} />
            </div>
          </div>{" "}
          <Workouts
            Exercisename="Incline Chest Press"
            Equipment="Barbell,Bench"
            FocusArea="Chest,Triceps"
          />
          <Workouts
            Exercisename="Incline Chest Press"
            Equipment="Barbell,Bench"
            FocusArea="Chest,Triceps"
          />
          <Workouts
            Exercisename="Incline Chest Press"
            Equipment="Barbell,Bench"
            FocusArea="Chest,Triceps"
          />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Exercises;
