import React from "react";
import Logo from "../Assets/logo.jpeg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow dark:bg-black ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Prime Fitness Studio
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6 ">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/membership" className="hover:underline me-4 md:me-6">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="hover:underline me-4 md:me-6">
                  Workout
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline me-4 md:me-6">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline me-4 md:me-6">
              Prime Fitness Studio™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
