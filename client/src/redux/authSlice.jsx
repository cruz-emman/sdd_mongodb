import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isFetching: false, 
        isError: false,
    },
    reducers:{
        resetState: (state) => {
            state.currentUser = null
            state.isFetching = false
            state.isError = false
        },
        loginStart: (state)=>{
            state.isFetching = true;
            state.isError = false;
        },
        loginSuccess: (state, action) =>{
            state.isFetching = false;
            state.isError = false,
            state.currentUser = action.payload;
        },
        loginFailure: (state) =>{
            state.isFetching = false;
            state.isError = true;
        },
        logOut: (state) =>{
            state.currentUser = null;
        },
    }
   
})

export const {loginStart,loginSuccess,loginFailure,logOut} = authSlice.actions
export default authSlice.reducer
