// fetchStatistics.js
import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosRequest} from './index';

export const fetchStatistics = createAsyncThunk(
  'statistics',
  async () => {
    try {
      const response = await axiosRequest({
        url: '/statistics',
        method: 'GET',
      });

      console.log('Axios Response:', response);

      return response.data;
    } catch (error) {
      console.error('Error fetching statistics:', error);

      // Передача помилки для обробки в компоненті
      throw error;
    }
  },
);

