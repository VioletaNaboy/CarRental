import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: []
};
export const favoritesCarsSlice = createSlice({
  name: 'favorites',
  initialState,
   reducers: {
    addToFavorites: (state, action) => {
      const newFavoriteCar = action.payload;
      state.items.push(newFavoriteCar);
    },
    removeFromFavorites: (state, action) => {
      const carToRemove = action.payload;
      state.items = state.items.filter(car => car.id !== carToRemove.id);
    },
  },
});


export const { addToFavorites, removeFromFavorites } = favoritesCarsSlice.actions;
export const favoritesCarsReducer = favoritesCarsSlice.reducer;