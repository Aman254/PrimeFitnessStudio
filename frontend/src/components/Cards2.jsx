import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const Cards2 = () => {
  return (
    <div
      className="cardDiv md:flex flex-row gap-8 items-center 
    my-8 cursor-pointer"
    >
      <div
        className="border border-yellow-200 hover:border-yellow-400 p-2 md:w-1/2 w-full 
      rounded-xl"
      >
        <CiCircleCheck className="text-yellow-400 text-8xl font-thin mt-6 " />

        <div className="p-2 mt-2">
          <span className="text-3xl">Monthly Plan</span>
        </div>
        <div className="w-full p-2 mt-2">
          <span className="">
            Experience unparalleled workouts with our cutting-edge equipment and
            pristine facilities, adhering to the highest standards of
            cleanliness and safety for your peace of mind.
          </span>
        </div>
      </div>

      {/* BOX - 2 */}
      <div
        className="border border-yellow-200 hover:border-yellow-400 p-2 md:w-1/2 w-full 
      rounded-xl md:mt-0 mt-4 "
      >
        <CiCircleCheck className="text-yellow-400 text-8xl font-thin mt-6 " />

        <div className="p-2 mt-2">
          <span className="text-3xl">Personal Trainer</span>
        </div>
        <div className="w-full p-2 mt-2">
          <span className="">
            Take your fitness journey to the next level with our dedicated
            personal trainers, offering tailored sessions to optimize your
            progress and keep you motivated every step of the way.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
