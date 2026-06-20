import {configureStore} from '@reduxjs/toolkit'
import Text  from './Feachour/Text'
import  NotificationSlice  from './Feachour/Notification'
import  AuthSlice  from './Feachour/AuthSlice'

export const store = configureStore({
    reducer : {
        counter : Text,
        notification : NotificationSlice,
        auth : AuthSlice,

    },

})