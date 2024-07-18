import {configureStore} from '@reduxjs/toolkit'
import todo from './TodoRedux'
import TodoSlice from './TodoRedux'
import ProductsReducers from './ProductsSlice'



 export const  store = configureStore({
    reducer:{
        Products: ProductsReducers,

    }
})


