import {configureStore} from '@reduxjs/toolkit'
import Text  from './Feachour/Text'
import  NotificationSlice  from './Feachour/Notification'

export const store = configureStore({
    reducer : {
        counter : Text,
        notification : NotificationSlice,
    },

})