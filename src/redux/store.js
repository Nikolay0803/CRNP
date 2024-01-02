import {configureStore} from '@reduxjs/toolkit';
import statsSlice from './statsSlice';
import dateSlice from './dateSlice';

export const store = configureStore({
  reducer: {
    stats: statsSlice,
    date: dateSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
