import React from "react";
import gymImage from "../Assets/gymImages/gymImg4.jpg";
import gymImag1 from "../Assets/gymImages/gymImg1.jpg";
import gymImag2 from "../Assets/gymImages/gymImg2.jpg";
import gymImag3 from "../Assets/gymImages/gymImg3.jpg";
import gymImag4 from "../Assets/gymImages/gymImg11.jpg";
import gymImag5 from "../Assets/gymImages/gymImg5.jpg";
import gymImag6 from "../Assets/gymImages/gymImg6.jpg";
import gymImag7 from "../Assets/gymImages/gymImg7.jpg";
import gymImag8 from "../Assets/gymImages/gymImg8.jpg";
import gymImag9 from "../Assets/gymImages/gymImg10.jpg";

const GymGallery = () => {
  return (
    <div className="mt-10 ">
      <span className="text-center text-4xl font-bold">Gym Gallery</span>
      <div className="md:flex flex-row gap-4 items-center mt-8 cursor-pointer">
        <div className="">
          <img
            src={gymImag1}
            alt="Ima"
            className="h-[25rem] md:w-[30rem] w-full mt-6 rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src={gymImag5}
            alt="Ima"
            className="h-[25rem] md:w-[30rem] w-full mt-6 rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src={gymImage}
            alt="Ima"
            className="h-[25rem] md:w-[30rem] w-full mt-6 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GymGallery;
