import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favoriteSlice.js";


export const store = configureStore({
  reducer: { 
    favorites: favoriteReducer
  },
});