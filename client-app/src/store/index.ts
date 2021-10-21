import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherStore";
import movieReducer from "./moviesStore";
import productReducer from "./productsStore";

export default configureStore({
  reducer: {
    weather: weatherReducer,
    movies: movieReducer,
    products: productReducer,
  },
});
