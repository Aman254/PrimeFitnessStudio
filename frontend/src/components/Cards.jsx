import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import Infobox from "./Infobox";

const Cards = () => {
  return (
    <div
      className="cardDiv md:flex flex-row gap-8 items-center 
    my-8 cursor-pointer"
    >
      <Infobox
        title="Quality"
        description="Experience unparalleled workouts with our cutting-edge equipment and
            pristine facilities, adhering to the highest standards of
            cleanliness and safety for your peace of mind."
      />

      {/* BOX - 2 */}
      <Infobox
        title="Expert Trainers"
        description="  Benefit from the expertise of our certified trainers, who bring
            years of experience and personalized attention to guide you towards
            your fitness aspirations effectively"
      />
    </div>
  );
};

export default Cards;
