import { useEffect } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  
  const movies = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVhZTExNDJlMDZkOGQzZDI0MTg4YThkOWQ0ZDlkOCIsInN1YiI6IjY1OWY1MTI4MzY3OWExMDEyOGFiYjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BU_PDCkfJi2u84YuPwxIpPcPEpsJ9m-nKmeL-Hh9A'
      }
    };
    const getPopularMovies = async () => {
        
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const json = await data.json()
      dispatch(addPopularMovies(json.results));
    };
    

    useEffect(() => {
      !movies && getPopularMovies();
    }, []);
  };
export default usePopularMovies