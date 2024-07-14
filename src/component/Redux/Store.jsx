import {configureStore} from '@reduxjs/toolkit'
import todo from './TodoRedux'
import TodoSlice from './TodoRedux'



 export const  store = configureStore({
    reducer:{
        todos: TodoSlice,

    }
})


