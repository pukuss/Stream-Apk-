import {configureStore} from '@reduxjs/toolkit'
import Text  from './Feachour/Text'

export const store = configureStore({
    reducer : {
        counter : Text,

    },

})