import { createAsyncThunk } from "@reduxjs/toolkit";

const  FetchApi = createAsyncThunk('data/fetchData',async ()=>{
    const resolve = await fetch('https://fakestoreapi.com/products')
    const data = await resolve.json()
    return data
})
    
export default FetchApi