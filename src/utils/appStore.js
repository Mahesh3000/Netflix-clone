import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './moviesSlice';
import configReducer from './configSlice';

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies : movieReducer,
        appConfig: configReducer
    }
})

export default appStore;