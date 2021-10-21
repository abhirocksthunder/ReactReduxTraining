import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../models/Products";

interface ProductsList{
    products: Products[]
}

const initialState = {
    products : []
} as ProductsList

const productsSlicer = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProducts(state,action){
            return{
                ...state,
                products: action.payload
            }
        }
    }
})

export const productsActions = productsSlicer.actions;

export default productsSlicer.reducer;