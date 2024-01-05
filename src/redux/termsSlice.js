// termsSlice.js
import {createSlice} from '@reduxjs/toolkit';
import { fetchTerms } from '../axios/terms';
 // Імпортуйте функцію fetchTerms

const termsSlice = createSlice({
  name: 'terms',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTerms.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTerms.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchTerms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default termsSlice.reducer;
