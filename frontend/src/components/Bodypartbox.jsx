import React from "react";
import { useExercise } from "../Context/Exercisecontext";

const Bodypartbox = ({ Bodypart, Img }) => {
  const { setBodyPart } = useExercise();
  const handleBodyPartClick = () => {
    setBodyPart(Bodypart);
  };

  return (
    <>
      <div className="flex items-center justify-between font-semibold gap-7">
        <div>
          <img
            src={Img}
            alt="BodyPart"
            className="max-h-40 max-w-40 min-h-40 min-w-40"
          />
          <div className="flex items-center">
            <span className="text-gray-600 hover:text-gray-900 transition-all cursor-pointer rounded-lg p-2">
              <button onClick={handleBodyPartClick}>{Bodypart}</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bodypartbox;
