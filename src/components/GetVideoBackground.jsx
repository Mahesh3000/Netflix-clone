
import {useSelector } from 'react-redux';
import useMovieTrailer from "../hooks/useMovieTrailer";

const GetVideoBackground = ({movieId,isPlaying}) => {
  
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  
  // Hardcoding trailer src = "4GPvYMKtrtI"
  // src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&loop=1"}
  return (
    <div className='w-full'>
      <iframe
      className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay="+isPlaying +"&mute=1&loop=1"}
        title="YouTube video player"
        frameBorder="0"
        id="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GetVideoBackground;


