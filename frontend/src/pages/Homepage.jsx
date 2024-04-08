import React from "react";
import Cards from "../components/Cards";
import Cards2 from "../components/Cards2";
import TrainerPage from "./aboutTrainerPage";
import GymGallery from "./gymGallery";
import Video from "./Video";
import Footer from "../components/Footer";
import Statsweb from "./stats";
import Navbar from "../components/Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Video />
      <div className="text-white p-4 m-4">
        <div>
          <span className="text-4xl">Why Us ?</span>
        </div>

        <Cards />
        <Cards2 />
        <TrainerPage />
        <GymGallery />
        <Statsweb />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
