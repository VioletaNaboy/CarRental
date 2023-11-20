import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://655632eb84b36e3a431f54b4.mockapi.io';


export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (page, thunkAPI) => {
    try {
        const response = await axios.get(`/adverts?page=${page}&limit=12`);
    return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);