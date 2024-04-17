import React from "react";
import Navbar from "./../components/Navbar";
import image from "./../Assets/slidingImage/image7.jpg";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import { Ratecard } from "../components/Ratecard";

const Membership = () => {
  return (
    <>
      <Navbar />

      <div
        className="bg-cover bg-center w-full h-72"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex justify-center items-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Membership Plans</h1>
        </div>
      </div>

      <section class="bg-black dark:bg-black">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-yellow-400">
              Elevating Your Fitness Experience
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              At our gym, we're committed to cultivating thriving fitness
              communities. We believe in leveraging dedication, motivation, and
              camaraderie to propel you towards your fitness aspirations and
              unlock your ultimate potential.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* <!-- Pricing Card --> */}
            <Ratecard
              title="Monthly"
              description="Best option for personal Beginners and New comers."
              rate="1200"
              timerate="/monthly"
              text1="Experienced Trainers"
              text2="Workout Plans, Daily"
              text3="Guidance"
              text4="Cardio Section"
              text5="For Beginners"
            />
            {/* <!-- Pricing Card --> */}
            <Ratecard
              title="Quaterly"
              description="Best option for Body Building and Weight Loss"
              rate="3400"
              timerate="/3 months"
              text1="Expert-Led Training Sessions"
              text2="Daily Exercise Routines."
              text3="Ongoing Support and Advice"
              text4="Exclusive Cardiovascular Training."
              text5=" Ideal for Novices."
            />

            {/* <!-- Pricing Card --> */}
            <Ratecard
              title="Half-Yearly"
              description="Best option for weight Loss and Gym Freaks"
              rate="6800"
              timerate="/6 Months"
              text1="Advanced Trainer Assistance."
              text2="Daily Exercise Regimens."
              text3="Mentorship and Direction."
              text4="Perfect for Gym Freaks"
              text5="Weight Loss"
            />

            {/* <!-- Pricing Card --> */}
          </div>
        </div>
      </section>

      <Pricing />
      <Footer />
    </>
  );
};

export default Membership;
