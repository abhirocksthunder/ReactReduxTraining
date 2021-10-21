import { createSlice } from "@reduxjs/toolkit";
import { Movies } from "../models/Movies";

interface MoviesList{
    movies: Movies[]
}

const initialState = {
    movies : []
} as MoviesList

const moviesSlicer = createSlice({
    name:'movies',
    initialState,
    reducers:{
        getNewReleases(state,action){
            return{
                ...state,
                movies: action.payload
            }
        }
    }
})

export const moviesActions = moviesSlicer.actions;

export default moviesSlicer.reducer;