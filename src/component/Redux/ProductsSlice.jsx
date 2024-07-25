import { createSlice } from "@reduxjs/toolkit"
import FetchApi from "../FetchApi/FetchApi"
import cart from "../cart/cart"



const ProductsSlice = createSlice({
    name: 'Products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
        userDatas: [],
        cart: {},
        count:{},
        
    },
    reducers:{
        currentUser: (state,action)=>{
            state.userDatas = action.payload
        },
        addToCart: (state,action) => {
            // if (action.payload === 1) {
                
            //     state.cart = {...state.cart, [action.payload] : action.payload + 1}
            // }
            state.cart ={...state.cart, [action.payload] : 1}
        },
        handleRemoveItem:(state,action) => {
            state.cart = {...state.cart, [action.payload] : 0 }
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

export const {currentUser,addToCart,handleRemoveItem} = ProductsSlice.actions

export default ProductsSlice.reducer