import React, { useRef, useState } from "react";
import { AiOutlineAudio } from "react-icons/ai";
import { AiOutlineAudioMuted } from "react-icons/ai";

import gymVideo from "../Assets/primevideogym.mp4";
const Video = () => {
  const [isMuted, setIsmuted] = useState(true);
  const videoRef = useRef(null);

  const handleMuteUnmute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsmuted(videoRef.current.muted);
  };
  return (
    <>
      <div className="text-white relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={gymVideo}
          ref={videoRef}
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <button
          className="text-white text-lg bg-black  p-2 rounded-lg"
          onClick={handleMuteUnmute}
        >
          {isMuted ? <AiOutlineAudioMuted /> : <AiOutlineAudio />}
        </button>
      </div>
    </>
  );
};

export default Video;
