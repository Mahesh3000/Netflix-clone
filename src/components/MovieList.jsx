import React from "react";
import MovieCard from "./MovieCard";
import { POSTER_URL } from "../utils/constants";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" px-10 z-10 ">
      <h1 className="text-2xl font-semibold py-4 text-white">{title}</h1>
      <div className=" flex overflow-x-auto " style={{overflowX:" hidd en"}}>
        <div className=" flex ">
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
