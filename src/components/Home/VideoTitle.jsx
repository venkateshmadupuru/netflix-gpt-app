import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { IoPlaySharp } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] px-10 md:pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black/50 aspect-video w-screen">
      <p className="text-lg md:text-5xl font-bold">{title}</p>
      <p className="hidden md:inline-block text-lg w-full max-w-2xl py-5">
        {overview}
      </p>
      <div className="flex gap-4 my-2">
        <button
          className="md:w-30 bg-white text-black font-semibold md:px-6 px-2 md:py-2 py-1 
                    rounded hover:brightness-90 transition duration-300 shadow-md mr-2"
        >
          <span className="flex items-center"><IoPlaySharp className="mr-1" />Play</span>
          
        </button>
        <button
          className="hidden md:inline-block w-32 bg-gray-800 text-white font-semibold px-4 py-2 
                    rounded hover:bg-gray-700 transition duration-300 shadow-md"
        >
          <span className="flex items-center"><BiInfoCircle className="mr-1" />More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
