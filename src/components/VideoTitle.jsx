import React from "react";

const VideoTitle = ({ title, overview, poster_path,onPlayHandle ,isPlaying}) => {
  return (
    <div className="py-[30%] md:py-[15%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-lg md:text-4xl mb-2 mt-[10%] md:my-2 font-bold md:w-1/3">{title}</h1>
      <p className="hidden md:block w-3/4 md:w-1/4 text-lg my-7 md:py-3">{overview}</p>
      <div className="gap-3 flex md:mt-10 mt-1">
        <button className="px-[0.4rem]  md:px-8 text-md md:text-lg md:py-3 text-black bg-white rounded font-bold "
        onClick={onPlayHandle}>
         {!isPlaying ? "Play" : "Stop"}
        </button>
        <button className="px-[0.5rem]  md:px-6 text-md md:text-lg md:py-3 text-white bg-gray-300 bg-opacity-50 rounded font-semibold">
        More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
