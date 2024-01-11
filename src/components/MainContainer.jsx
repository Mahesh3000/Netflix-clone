import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';
import GetVideoBackground from './GetVideoBackground';

const MainContainer = () => {
  
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];
    
    const {original_title,overview,poster_path} = mainMovie
    
    return (
    <div>
        <VideoTitle title={original_title} overview={overview} poster_path = {poster_path}/>
        <GetVideoBackground/>
    </div>
  )
}

export default MainContainer