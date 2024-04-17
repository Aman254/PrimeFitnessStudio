import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import Infobox from "./Infobox";

const Cards2 = () => {
  return (
    <div
      className="cardDiv md:flex flex-row gap-8 items-center 
    my-8 cursor-pointer"
    >
      {/* BOX - 3 */}
      <Infobox
        title="Monthly Plan"
        description="Experience unparalleled workouts with our cutting-edge equipment and
        pristine facilities, adhering to the highest standards of
        cleanliness and safety for your peace of mind."
      />
      {/* BOX - 4 */}
      <Infobox
        title="Personal Trainer"
        description="Take your fitness journey to the next level with our dedicated
        personal trainers, offering tailored sessions to optimize your
        progress and keep you motivated every step of the way"
      />
    </div>
  );
};

export default Cards2;
