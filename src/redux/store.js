import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';
import { favoritesCarsReducer } from './favorites/favoritesSlice';
const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesCarsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);