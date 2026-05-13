import { createSlice } from "@reduxjs/toolkit";

export const Text = createSlice({
    name : "bane",
    initialState:{
        point : 10
    },

    reducers:{
        UP_point : (state)=>{
            state.point += 1
        },

        DOWN_point : (state) => {
            state.point -= 1
        }
    }
})

export const {UP_point,DOWN_point} = Text.actions;
export default Text.reducer