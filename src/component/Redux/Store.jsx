import {configureStore} from '@reduxjs/toolkit'
import todo from './TodoRedux'



 export const  store = configureStore({
    reducer:{
        todos: todo,

    }
})


