import { createSlice } from "@reduxjs/toolkit";

export const GameDETA = createSlice({
    name : 'Tournament Game Request Deta From Filling Form',
    initialState : {
        GameData : {
            value : 0,
            deta : {}
        },

        reducers :{
            SetDeta : (state,action) => {
                state.deta += action.payload;
            }
        }

        
        
    }
})