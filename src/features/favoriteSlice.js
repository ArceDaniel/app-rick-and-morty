import { createSlice } from "@reduxjs/toolkit";

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
        
            const filterCopy = [...state.favorites]
            let filtrado = filterCopy.filter(e => e.gender === action.payload)
            if(action.payload === "All") filtrado = filterCopy;
            state.filter = filtrado;

        },
        orderCards(state, { payload }){
            if(payload === 'Descendente') 
                state.filter = state.filter.sort((a,b)=> a.id - b.id)
            if(payload === 'Ascendente') 
                state.filter = state.filter.sort((a,b)=> b.id - a.id)
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