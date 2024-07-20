import { createSlice } from "@reduxjs/toolkit"
import FetchApi from "../FetchApi/FetchApi"



const ProductsSlice = createSlice({
    name: 'Products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
        userDatas: [],
    },
    reducers:{
        currentUser: (state,action)=>{
            state.userDatas = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(FetchApi.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(FetchApi.fulfilled, (state,action)=>{
            state.status = 'completed'
            state.products =  action.payload
        })
        .addCase(FetchApi.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {currentUser} = ProductsSlice.actions

export default ProductsSlice.reducer