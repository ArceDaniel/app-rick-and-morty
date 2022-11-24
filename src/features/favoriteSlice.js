import { createSlice } from "@reduxjs/toolkit";
import { bubbleSort, bubbleSortnt } from "./helpers";

const initialState = {
    favorites: [],
    filter:[]
};


const chartSlice = createSlice({
    name: "favorites",
    initialState,
    reducers:{
        addFavorite(state, action){
            state.favorites.push(action.payload)
            state.filter.push(action.payload)      
        },
         removeFavorite(state, action){
             const newState = state.favorites.filter(fav =>
                 fav.id !== action.payload.id
                )
            state.favorites = newState;
            state.filter = newState;
           
        },
        filterCards(state, action){
            const newState = state.favorites.filter(fav =>
                fav.gender === action.payload
               )
            state.filter = newState;
        },
        orderCards(state, action){
            let newState = []
            if(action.payload){
                newState = bubbleSort(state.filter )
                state.filter = newState
            }else{
                newState = bubbleSortnt(state.filter )
                state.filter = newState
            }
          
        }

    }
})
export const {
    addFavorite,
    removeFavorite,
    filterCards,
    orderCards
} = chartSlice.actions;
export default chartSlice.reducer;