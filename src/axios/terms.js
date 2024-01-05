import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosRequest} from './index';
export const fetchTerms = createAsyncThunk('terms/fetchTerms', async () => {
  const lang = 'ua';
  try {
    const response = await axiosRequest({
      url: `/terms/${lang}`,
      method: 'GET',
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching terms:', error);
    throw error;
  }
});
