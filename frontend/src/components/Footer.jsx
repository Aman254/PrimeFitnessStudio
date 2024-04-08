import React from "react";
import Logo from "../Assets/logo.jpeg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow dark:bg-black ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Prime Fitness Studio
              </span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/" class="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/contact" class="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" class="hover:underline">
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
