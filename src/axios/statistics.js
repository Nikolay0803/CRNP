import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosRequest} from './index';
import {format} from 'date-fns';
export const fetchStatistics = createAsyncThunk(
  'stats/fetchStatistics',
  async () => {
    try {
      const date = format(new Date(), 'yyyy-MM-dd');
      const response = await axiosRequest({
        url: `/statistics/${date}`,
        method: 'GET',
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching statistics:', error);
      throw error;
    }
  },
);
