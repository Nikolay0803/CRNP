import {configureStore} from '@reduxjs/toolkit';
import statsSlice from './statsSlice';
import termsSlice from './termsSlice';
// import dateSlice from './dateSlice';
import {fetchStatistics} from '../axios/statistics';
import { fetchTerms } from '../axios/terms';

export const store = configureStore({
  reducer: {
    stats: statsSlice,
    terms: termsSlice,
    // date: dateSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fetchStatistics,),
});