import React, { useEffect, useState } from "react";
import { fetchExerciseWithId } from "../Services/api";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Viewdetails = () => {
  const {id} = useParams();
  const [isLoaded , setLoaded] = useState(false);

  const [details , setDetails] = useState({
    videoSrc : "",
    name : "",
    focusArea : "",
    equipment : "",
    execution : []
  });

  async function getExerciseWithId(id){
    try {
      const response = await fetchExerciseWithId(id);

      if(response?.data?.status === "Sucess"){
        let data = response.data.data.exercise;
        console.log(data?.videoUrl);
        setDetails({
          videoSrc : data?.videoUrl || "not found",
          name : data?.name || "no name available",
          focusArea : data?.focusArea || "not found",
          equipment : data?.equipment || "none",
          execution : data?.execution
        });
      }else{
        alert("no data found with id" , id);
      }
    } catch (error) {
      console.log("error while fetching exercise with Id" , id , error);
    }
  }

  useEffect(()=>{
    if(!isLoaded){
      getExerciseWithId(id);
      setLoaded(true);
    }
  } , []);

  return (
    <>
      <Navbar />
      <div className="md:flex flex-row justify-between  text-white p-2 mt-32">
        <div className="md:w-1/2 w-full p-2 m-2 md:mt-0 mt-20">
          <iframe
            src={details?.videoSrc}
            title="Name"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded-lg shadow-lg md:h-[30rem] h-[20rem] w-full"
          ></iframe>
        </div>

        <div className="md:w-1/2 w-full p-2 m-2">
          <div className="flex flex-col p-2">
            <span className="font-bold text-4xl text-yellow-400 p-2">
              {details?.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="p-2 font-semibold md:text-2xl text-[25px] text-yellow-400">
                Focus Area:
              </span>
              <span className="md:text-xl text-[15px] font-oswald">
                {details?.focusArea}
              </span>
            </div>
            <span className="flex items-center gap-2">
              <span className="p-2 font-semibold md:text-2xl text-[25px] text-yellow-400">
                Equipment:
              </span>
              <span className="md:text-xl text-[12px] font-oswald w-full">
               {details.equipment}
              </span>
            </span>
            <div className="flex flex-col ">
              <span className="font-bold text-4xl text-yellow-400 p-2">
                Execution:
              </span>
              <div className="flex flex-col w-full p-2 items-center md:gap-2 gap-6 md:text-[20px] text[15px]">
                {
                  (details?.execution || []).map((steps , idx)=>(
                    <span key={`execution-${idx}`}>
                      {steps}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewdetails;
