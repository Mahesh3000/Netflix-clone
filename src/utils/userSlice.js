import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({

    name: 'user',
    initialState: null,
    reducers:{
        addUser: (state,action) => {
            console.log(action.payload);
            return action.payload;
        }
    }

});

export const {addUser} = userSlice.actions;

export default userSlice.reducer;