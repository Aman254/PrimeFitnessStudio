import React from "react";
import gymImage from "../Assets/gymImage.jpeg";
import gymImag1 from "../Assets/gymimage1.jpg";
import gymImage3 from "../Assets/gymImage3.jpg";

const GymGallery = () => {
  return (
    <div className="mt-10 ">
      <span className="text-center text-4xl font-bold">Gym Gallery</span>
      <div className="md:flex flex-row gap-4 items-center mt-8 cursor-pointer">
        <div className="">
          <img
            src={gymImage}
            alt="Ima"
            className="h-[25rem] md:w-[30rem] w-full mt-6 rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src={gymImag1}
            alt="Ima"
            className="h-[25rem] md:w-[30rem] w-full mt-6 rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src={gymImage3}
            alt="Ima"
            className="h-[25rem] md:w-[30rem] w-full mt-6 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GymGallery;
