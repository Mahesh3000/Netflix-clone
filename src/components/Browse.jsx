import React, { useEffect } from "react";
import Header from "../common/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import { useSelector} from 'react-redux';

const Browse = () => {

 useNowPlayingMovies();
 usePopularMovies();
 useUpComingMovies();
 
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        MainContainer
          -->Trailer with Video background play
          --> Video Title
        Secondary Container
          --> Movies List *n
            --> cards * n
      */}
    </div>
  );
};

export default Browse;
