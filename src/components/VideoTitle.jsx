import React from "react";

const VideoTitle = ({ title, overview, poster_path }) => {
  return (
    <div className="py-[20%] md:py-[15%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-lg md:text-4xl my-[10%] md:my-2 font-bold md:w-1/3">{title}</h1>
      <p className="w-3/4 md:w-1/4 text-lg my-7 md:py-3">{overview}</p>
      <div className="gap-3 flex md:mt-10 mt-4">
        <button className="px-2 py-1 md:px-8 text-lg md:py-3 text-black bg-white rounded font-bold ">
        <p className=""></p> Play
        </button>
        <button className="px-2 py-2 md:px-6 md:py-3 text-white bg-gray-300 bg-opacity-50 rounded font-semibold">
        <p className="bg-transparent opacity-50"> </p> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
