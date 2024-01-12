import React from "react";
import MovieCard from "./MovieCard";
import { POSTER_URL } from "../utils/constants";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6  md:px-10 z-10 overflow-y-hidden pb-10 ">
      <h1 className="text-lg py-2 md:text-2xl md:py-4 font-semibold  text-white">{title}</h1>
      <div className=" flex overflow-x-auto overflow-y-hidden " >
        <div className=" flex  md:mb-0 -mb-12 ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie?.original_title}
              poster={POSTER_URL + movie?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
