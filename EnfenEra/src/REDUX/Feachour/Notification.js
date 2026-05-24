import { createSlice } from "@reduxjs/toolkit";
import { If } from "three/src/nodes/tsl/TSLCore.js";

export const NotificationSlice = createSlice({
    name : 'Notification SEND SMS',
    initialState : {
        requestdata : [],
        currentStep : 1

    },

    reducers : {
        addrequest : (state,action) => {
            state.requestdata.push(action.payload);
            console.log(state.requestdata);
            
        },

        next : (state,action) => {
            if (state.currentStep < 5 ){
                state.currentStep += 1;
            }
            
        },
        back : (state) => {
            if(state.currentStep > 1){
                state.currentStep -= 1;
            }
        }



    }
})

export const {
    addrequest,
    next,
    back,
    
} = NotificationSlice.actions;

export default NotificationSlice.reducer