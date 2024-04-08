import React from "react";

const stats = () => {
  return (
    <div className="w-full border bg-yellow-400 md:h-[24rem] h-1/2 text-black mt-6 p-2">
      <div className="p-4">
        <span className="text-4xl font-bold">Numbers, Say it All</span>
      </div>
      <div className="md:flex flex-row mt-4 md:justify-between items-center">
        <div className=" md:w-1/4 w-full mt-4">
          <div className="text-center">
            <span className=" text-9xl font-extrabold">200+</span>
          </div>
          <div className="text-center ">
            <span className="text-xl font-semibold">
              Monthly Active Customers
            </span>
          </div>
        </div>
        {/* Box2  */}
        <div className=" md:w-1/4 w-full mt-4">
          <div className="text-center">
            <span className=" text-9xl font-extrabold">40+</span>
          </div>
          <div className="text-center">
            <span className="text-xl font-semibold">
              Machines and Equipments
            </span>
          </div>
        </div>

        {/* Box3  */}
        <div className=" md:w-1/4 w-full mt-4">
          <div className="text-center">
            <span className=" text-9xl font-extrabold">4+</span>
          </div>
          <div className="text-center">
            <span className="text-xl font-semibold">Years of Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
