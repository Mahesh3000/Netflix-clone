import React from "react";

const VideoTitle = ({ title, overview, poster_path }) => {
  return (
    <div className="py-[15%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-4xl my-2 font-bold w-1/3">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div className="gap-3 flex mt-10">
        <button className="px-8 text-lg py-3 text-black bg-white rounded font-bold ">
        <p className=""></p> Play
        </button>
        <button className="px-6 py-3 text-white bg-gray-300 bg-opacity-50 rounded font-semibold">
        <p className="bg-transparent opacity-50"> </p> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
