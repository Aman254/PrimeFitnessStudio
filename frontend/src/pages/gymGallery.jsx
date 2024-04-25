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
import Carousel from "../components/Carousel";

const GymGallery = () => {
  const images = [
    gymImage,
    gymImag1,
    gymImag2,
    gymImag3,
    gymImag4,
    gymImag5,
    gymImag6,
    gymImag7,
    gymImag8,
    gymImag9,
  ];
  return (
    <div className="mt-10 ">
      <span className="text-center text-4xl font-bold">Gym Gallery</span>
      <div className="md:flex flex-row rounded-lg gap-4 items-center mt-8 cursor-pointer max-w-screen">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default GymGallery;
