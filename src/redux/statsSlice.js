import {createSlice} from '@reduxjs/toolkit';
import { fetchStatistics } from '../axios/statistics';


const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStatistics.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default statsSlice.reducer;
