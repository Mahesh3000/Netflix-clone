import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchMovieVideo();
  }, []);

  const fetchMovieVideo = async () => {
    const movieVideo = await fetch(
      "https://api.themoviedb.org/3/movie/572802/videos?language=en-US",
      { API_OPTIONS }
    );

    const json = await movieVideo.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
