import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  let [imageNumber, setImageNumber] = useState([0]);

  const handleNextImg = () => {
    imageNumber = setImageNumber(
      (prevImageNumber) => (prevImageNumber + 1) % images.length
    );
  };

  const handlePrevImg = () => {
    imageNumber = setImageNumber((prevImageNumber) => {
      if (prevImageNumber === 0) {
        return images.length - 1;
      } else {
        return prevImageNumber - 1;
      }
    });
  };
  console.log(images);
  return (
    <div className="w-full relative">
      <div className="">
        <img
          src={images[imageNumber]}
          alt=""
          className="md:h-screen h-[25rem] w-full rounded-lg shadow-lg"
        />
        <button
          onClick={handleNextImg}
          className="absolute top-1/2 right-0 text-2xl text-white rounded-full bg-gray-900 p-[2px]"
        >
          <FaAngleRight />
        </button>
        <button
          onClick={handlePrevImg}
          className="absolute top-1/2 left-0 text-2xl text-white rounded-full bg-gray-900 p-[2px]"
        >
          <FaAngleLeft />
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default Carousel;
