import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies, searchText } from "../utils/moviesSlice";
import debounce from "lodash/debounce";
import lang from "./languageConstants";

const FindingMovies = () => {
  const search = useRef("");
  const dispatch = useDispatch();
  const findMovieText = useSelector((store) => store.movies.searchText);

  const appLang = useSelector((store) => store.appConfig.currentApplLang);
  
  
  const searchAnMovie = async (search) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVhZTExNDJlMDZkOGQzZDI0MTg4YThkOWQ0ZDlkOCIsInN1YiI6IjY1OWY1MTI4MzY3OWExMDEyOGFiYjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BU_PDCkfJi2u84YuPwxIpPcPEpsJ9m-nKmeL-Hh9A",
      },
    };

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        search +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    dispatch(addSearchedMovies(json.results));
  };
  const debouncedApiCall = debounce(searchAnMovie, 2000);

  const onSearchHandler = (e) => {
    dispatch(searchText(search.current.value));
    debouncedApiCall(findMovieText);
  };

  return (
    <input
      type="text"
      ref={search}
      onChange={(e) => onSearchHandler(e.target.value)}
      className="w-60 h-9 px-2 rounded border-none font-semibold text-xl focus:outline-none"
      placeholder={lang[appLang].search}
    />
  );
};

export default FindingMovies;
