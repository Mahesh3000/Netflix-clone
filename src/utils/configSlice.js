import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
    name:'appConfig',
    initialState:{
        currentApplLang: "en"
    },
    reducers: {
        setLang: (state,action) =>{
            state.currentApplLang = action.payload
        }
    }
})

export const {setLang} = configSlice.actions;
export default configSlice.reducer;