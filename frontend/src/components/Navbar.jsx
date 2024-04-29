import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "./Avatar";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = function () {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed  top-0 left-0 right-0 z-50 p-2 text-white  bg-transparent md:block hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between font-poppins">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt=""
                className="md:w-14 md:h-14 h-10 w-10 rounded-full"
              />
              <h1 className="sm:text-2xl text-[1rem] font-bold text text-yellow-400 font-poppins">
                Prime Fitness Studio
              </h1>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer">
              <ul className="">
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black font-poppins"
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/contact"
                    className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/membership"
                    className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black"
                  >
                    Membership
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/exercises"
                    className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black"
                  >
                    Workouts
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/login"
                    className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black"
                  >
                    <Avatar />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed top-0 left-0 right-0 z-50 p-2 text-white  bg-transparent md:hidden block">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between font-poppins">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt=""
                className="md:w-14 md:h-14 h-10 w-10 rounded-full"
              />
              <h1 className="sm:text-2xl text-[1rem] font-bold text text-yellow-400 font-poppins">
                Prime Fitness Studio
              </h1>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer text-yellow-400 font-bold text-2xl">
              <button>
                <GiHamburgerMenu onClick={handleHamburgerClick} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className=" flex-col items-center  h-full text-black md:hidden block">
          <div className=" mt-20 w-full">
            <div
              className=" p-4 bg-yellow-400 transition-all font-bold text-2xl border 
            border-b-black"
            >
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </ul>
            </div>

            <div className=" p-4 bg-yellow-400 transition-all font-bold text-2xl border border-b-black">
              <ul>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className=" p-4 bg-yellow-400 transition-all font-bold text-2xl border border-b-black">
              <ul>
                <li>
                  <Link to="/membership">Membership</Link>
                </li>
              </ul>
            </div>

            <div className=" p-4 bg-yellow-400 transition-all font-bold text-2xl border border-b-black">
              <ul>
                <li>
                  <Link to="/exercises">Workout</Link>
                </li>
              </ul>
            </div>

            <div className=" p-4 bg-yellow-400 transition-all font-bold text-2xl border border-b-black">
              <ul>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
