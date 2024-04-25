import React from "react";

const Bodypartbox = ({ Bodypart, Img }) => {
  return (
    <div className="m-2 p-2 flex flex-wrap justify-center md:flex-col md:items-center ">
      <div>
        <img src={Img} alt="" className="max-h-25  rounded-full" />
      </div>
      <button className=" p-4 rounded-lg font-semibold text-gray-900 hover:text-gray-600 cursor-pointer">
        {Bodypart}
      </button>
    </div>
  );
};

export default Bodypartbox;
