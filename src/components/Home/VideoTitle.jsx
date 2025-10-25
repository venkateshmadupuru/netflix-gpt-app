import React from "react";

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
                    rounded hover:bg-gray-600 hover:scale-125 transition duration-300 shadow-md mr-2"
        >
          ▶️Play
        </button>

        <button
          className="hidden md:inline-block w-30 bg-gray-700 text-white font-semibold px-4 py-2 
                    rounded hover:bg-gray-600 hover:scale-125 transition duration-300 shadow-md"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
