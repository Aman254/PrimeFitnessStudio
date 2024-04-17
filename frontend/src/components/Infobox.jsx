import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const Infobox = ({ title, description }) => {
  return (
    <div
      className="border border-yellow-400 hover:border-yellow-200 p-2 md:w-1/2 w-full 
rounded-xl"
    >
      <CiCircleCheck className="text-yellow-400 text-8xl font-thin mt-6 " />

      <div className="p-2 mt-2">
        <span className="text-3xl">{title}</span>
      </div>
      <div className="w-full p-2 mt-2">
        <span className="">{description}</span>
      </div>
    </div>
  );
};

export default Infobox;
