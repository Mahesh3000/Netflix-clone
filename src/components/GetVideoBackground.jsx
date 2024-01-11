
import {useSelector } from 'react-redux';
import useMovieTrailer from "../hooks/useMovieTrailer";

const GetVideoBackground = () => {
  
    useMovieTrailer();
    const trailer = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
      className='w-full aspect-video'
        src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        frameBorder="0"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <video src={`https://www.youtube.com/watch?v=` + { trailer }} /> */}
    </div>
  );
};

export default GetVideoBackground;

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVhZTExNDJlMDZkOGQzZDI0MTg4YThkOWQ0ZDlkOCIsInN1YiI6IjY1OWY1MTI4MzY3OWExMDEyOGFiYjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BU_PDCkfJi2u84YuPwxIpPcPEpsJ9m-nKmeL-Hh9A'
//     }
//   };
