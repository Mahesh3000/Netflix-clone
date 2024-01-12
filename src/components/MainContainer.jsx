import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import GetVideoBackground from "./GetVideoBackground";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  if (!movies) return;

  const mainMovie = movies[0];
  
  const { original_title, overview, poster_path, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} poster_path = {poster_path}/>
      {/* <VideoTitle
        title={trailer?.name}
        overview={trailer?.overview}
        poster_path={poster_path}
      /> */}
      {/* <VideoTitle title={trailer?.name} /> */}
      <GetVideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
