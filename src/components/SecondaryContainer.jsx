import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux';
import lang from "../common/languageConstants";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);


  const appLang = useSelector((store) => store.appConfig.currentApplLang);
  
 const movieSearchedOrNot = useSelector((store) => store.movies.searchText);
 
 const moviesFound = useSelector((store) => store.movies.foundMovies)
 
  return (
   
    nowPlayingMovies && (<div className='bg-black '>
      <div className='mt-[200px]  md:-mt-60 relative z-20 '>
      {!movieSearchedOrNot ? <>
      <MovieList title={lang[appLang].nowPlaying} movies={nowPlayingMovies}/>
      <MovieList title={lang[appLang].trending} movies={popularMovies}/>
      <MovieList title={lang[appLang].upComing} movies={upcomingMovies}/>
      </> : <MovieList title={lang[appLang].found_Movies} movies={moviesFound}/>}
      </div>
    </div>)
  )
}

export default SecondaryContainer
