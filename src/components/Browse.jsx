import React, { useEffect } from "react";
import Header from "../common/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

 useNowPlayingMovies();
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
