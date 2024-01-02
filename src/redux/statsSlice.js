// statsSlice.js
import {createSlice} from '@reduxjs/toolkit';

const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    addStats: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    setStatsLoading: state => {
      state.loading = true;
      state.error = null;
    },
    setStatsError: (state, action) => {
      state.loading = false;
      console.error(action.payload);
      state.error = action.payload;
    },
  },
});

export const {addStats, setStatsLoading, setStatsError} = statsSlice.actions;
export default statsSlice.reducer;
