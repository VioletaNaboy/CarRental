import { createSlice } from '@reduxjs/toolkit';
import {
    fetchCars
} from './operations';
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
    },
    [fetchCars.rejected]: handleRejected,
  },
});

export const carsReducer = carsSlice.reducer;