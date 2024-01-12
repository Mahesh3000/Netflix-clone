import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({

    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo : null,
        upcomingMovies:null,
        popularMovies:null
    },

    reducers:{
        addNowPlayingMovies : (state,action) =>{
            
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload
        },
        searchText: (state,action) => {
            state.searchText =  action.payload;
        }
    }
})

export const {searchText,addUpcomingMovies,addPopularMovies,addNowPlayingMovies,addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;