import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


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
       toast.success('Car successfully added to favorites!');
    },
    removeFromFavorites: (state, action) => {
      const carToRemove = action.payload;
      state.items = state.items.filter(car => car.id !== carToRemove.id);
      toast.error('Car successfully removed from favorites!');
    },
  },
});


export const { addToFavorites, removeFromFavorites } = favoritesCarsSlice.actions;
export const favoritesCarsReducer = favoritesCarsSlice.reducer;