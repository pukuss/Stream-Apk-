import { createSlice } from "@reduxjs/toolkit";

export const NotificationSlice = createSlice({
    name : 'Notification SEND SMS',
    initialState : {
        Heading : "",
        Titel : "" ,
        Date : "" ,
    },

    reducers : {
        setHeading : (state,action) => {
            state.Heading = action.payload;
            console.log(state.Heading);
            
        },

        setTitel : (state, action) => {
            state.Titel = action.payload;
        },

        setDate : (state,action) => {
            state.Date = action.payload;
        }
    }
})

export const {
    setDate,
    setTitel,
    setHeading    
} = NotificationSlice.actions;

export default NotificationSlice.reducer