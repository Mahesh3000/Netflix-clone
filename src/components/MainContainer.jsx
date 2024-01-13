import React, { useState } from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import GetVideoBackground from "./GetVideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [isPlaying, setPlaying] = useState(true);
  
  const handlePlay = () =>{
    setPlaying(!isPlaying)
  }
  
  if (!movies) return;

  const mainMovie = movies[0];
  
  const { original_title, overview, poster_path, id } = mainMovie;
  

  
  return (
    <div className="">
      <VideoTitle onPlayHandle={handlePlay} title={original_title} overview={overview} poster_path = {poster_path} isPlaying={isPlaying}/>
      {/* <VideoTitle
        title={trailer?.name}
        overview={trailer?.overview}
        poster_path={poster_path}
      /> */}
      {/* <VideoTitle title={trailer?.name} /> */}
      <GetVideoBackground movieId={id} isPlaying={isPlaying}/>
    </div>
  );
};

export default MainContainer;
