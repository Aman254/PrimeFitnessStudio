import React from "react";
import cImg1 from "../Assets/coursImages/coursImg1.jpg";

const Carousel = (props) => {
  return (
    <div className="">
      <img
        src={cImg1}
        alt=""
        className="h-screen md:min-w-[35rem] md:max-w-[38rem] w-full rounded-md"
      />
    </div>
  );
};

export default Carousel;
