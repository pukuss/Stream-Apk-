import {createSlice} from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name : "authintication",
    initialState:{
        user : null,
        profile : null,
        looding : true,
    },

    reducers:{
        setAuth : (state,action) => {
            state.user = action.payload.user;
            state.profile = action.payload.profile;
        },
        clearAuth : (state,action) => {
            state.user = null;
            state.profile = null;
        },
        setLooding : (state , action) => {
            state.looding = action.payload;
        }
    }
})

export const {setAuth,clearAuth,setLooding} = AuthSlice.actions;
export default AuthSlice.reducer