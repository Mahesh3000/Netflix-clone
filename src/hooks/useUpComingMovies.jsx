import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpComingMovies = () => {
  const movies = useSelector((store) => store.movies.upcomingMovies);
    const dispatch = useDispatch();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVhZTExNDJlMDZkOGQzZDI0MTg4YThkOWQ0ZDlkOCIsInN1YiI6IjY1OWY1MTI4MzY3OWExMDEyOGFiYjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BU_PDCkfJi2u84YuPwxIpPcPEpsJ9m-nKmeL-Hh9A'
      }
    };
    const getUpcomingMovies = async () => {
        
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      const json = await data.json()
      dispatch(addUpcomingMovies(json.results));
    };
    

    useEffect(() => {
      !movies && getUpcomingMovies();
    }, []);
}

export default useUpComingMovies